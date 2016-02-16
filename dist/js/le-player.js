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
						'rate', 'divider', 'backward', 'divider', 'subtitles', 'divider', 'download'
					]
				}
			]

		}, opts);

		var sources = [];
		var subtitles = [];
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

		// Set subtitles.
		element.children('track[kind="subtitles"]').each(function () {
			var language = $(this).attr('srclang');
			var title = $(this).attr('label');
			var src = $(this).attr('src');
			if (title.length > 0 && src.length > 0) {
				subtitles.push({
					title: title,
					src: src,
					language: language
				});
			}
		});

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

		var getCookie = function (name, dflt) {
			var cookies = document.cookie.split(';');
			for (var i in cookies) {
				var d = cookies[i].trim().split('=');
				if (d[0] == 'leplayer_' + name)
					return d[1];
			}
			return dflt;
		};

		var setCookie = function (name, value) {
			var d = new Date();
			d.setDate(d.year + 1);
			document.cookie = 'leplayer_' + name + '=' + value + ';expires=' + d.toString();
		};

		var createControl = function (type) {
			switch (type) {
				case 'backward':
					controls.backward = $('<div />').addClass('control backward').append($('<i />').addClass('fa fa-undo'));
					return controls.backward;

				case 'divider':
					return $('<div />').addClass('divider');

				case 'download':
					controls.download = $('<a />').attr('href', sources[0]).attr('target', '_blank').attr('download', sources[0]).addClass('control download').append($('<i />').addClass('fa fa-download'));
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
						increase: function () {
							if (video.playbackRate < options.rate.max) {
								this.down.removeClass('disabled');
								video.playbackRate += options.rate.step;
								this.display();
								setCookie('rate', video.playbackRate);
							}
							else
								this.up.addClass('disabled');

						},
						decrease: function () {
							if (video.playbackRate > options.rate.min) {
								this.up.removeClass('disabled');
								video.playbackRate -= options.rate.step;
								this.display();
								setCookie('rate', video.playbackRate);
							}
							else
								this.down.addClass('disabled');
						}
					};
					return $('<div />').addClass('control-container').append(controls.rate.down).append(controls.rate.current).append(controls.rate.up);

				case 'subtitles':
					if (subtitles.length > 0) {
						controls.subtitles = [];
						var list = $('<div/>').addClass('control-inner');
						for (var i in subtitles) {
							controls.subtitles.push($('<div />').addClass('inner-item').data('src', subtitles[i].src).data('language', subtitles[i].language).html(subtitles[i].title));
						}
						for (var i in controls.subtitles) {
							list.append(controls.subtitles[i]);
						}
						return $('<div />').addClass('control control-container').append($('<div />').addClass('subtitles-icon').append($('<i />').addClass('fa fa-commenting-o'))).append(list);
					}
					return null;

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
								setCookie('volume', value);
							}
							var p = Math.round(value * 100).toString() + '%';
							this.active.css('height', p);
							this.marker.css('bottom', p);
						},
						toggleMuted: function () {
							if (video.muted == true) {
								this.set(getCookie('volume', 0.4));
							}
							else
								this.set(0);
						}
					};
					controls.volume.line = $('<div/>').addClass('volume-line').append(controls.volume.active).append(controls.volume.marker);
					controls.volume.container = $('<div />').addClass('control control-container').append(controls.volume.icon).append($('<div />').addClass('control-inner volume-slider').append(controls.volume.line));
					return controls.volume.container;

				default:
					return null;
			}
		};

		var initControl = function (type) {
			switch (type) {
				case 'backward':
					controls.backward.click(function () {
						if (video.currentTime - options.playback.step.medium > 0)
							seek(video.currentTime - options.playback.step.medium);
					});
					break;

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
					video.playbackRate = getCookie('rate', 1);
					controls.rate.display();
					controls.rate.up.click(function () {
						controls.rate.increase();
					});
					controls.rate.down.click(function () {
						controls.rate.decrease();
					});
					break;

				case 'subtitles':
					for (var i in controls.subtitles)
					{
						controls.subtitles[i].click(function(){
							switchTrack($(this).data('language'));
						});
					}
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

					controls.volume.set(getCookie('volume', 0.4));
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
		var seek = function (time) {
			video.currentTime = time;
		};

		var switchTrack = function(language) {
			
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