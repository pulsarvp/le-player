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
		var video = null;
		var controls = {};

		/**
		 * DOM conatainer to hold video and all other stuff.
		 * @type object
		 */
		var container = null;
		var overlay = null;

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

		var createSimpleControl = function (cssClass, iconClass) {
			return $('<div />').addClass('control ' + cssClass).append($('<i />').addClass('fa fa-' + iconClass));
		};

		var createControl = function (type) {
			switch (type) {
				case 'backward':
					controls.backward = createSimpleControl('backward', 'undo').click(function () {
						if (video.currentTime - options.playback.step.medium > 0)
							seek(video.currentTime - options.playback.step.medium);
						else
							seek(0);
					});
					return controls.backward;

				case 'divider':
					return $('<div />').addClass('divider');

				case 'download':
					controls.download = $('<a />').attr('href', sources[0]).attr('target', '_blank').attr('download', sources[0]).addClass('control download').append($('<i />').addClass('fa fa-download'));
					return controls.download;

				case 'forward':
					controls.forward = createSimpleControl('forward', 'redo');
					return controls.forward;

				case 'fullscreen':
					controls.fullscreen = createSimpleControl('fullscreen', 'arrows-alt').click(function () {
						toggleFullscreen();
					});
					return controls.fullscreen;

				case 'play':
					controls.play = createSimpleControl('play', 'play').click(function () {
						togglePlay();
					});
					return controls.play;

				case 'rate':
					controls.rate = {
						down: $('<div />').addClass('control rate-down').append($('<i />').addClass('fa fa-backward')).click(function () {
							controls.rate.decrease();
						}),
						up: $('<div />').addClass('control rate-down').append($('<i />').addClass('fa fa-forward')).click(function () {
							controls.rate.increase();
						}),
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
						controls.subtitles = {
							list: [],
							icon: $('<div />').addClass('control-icon').append($('<i />').addClass('fa fa-commenting-o')).click(function () {
								switchTrack('');
								$(this).html($('<i />').addClass('fa fa-commenting-o'));
							})
						};
						var list = $('<div/>').addClass('control-inner');
						for (var i in subtitles) {
							controls.subtitles.list.push($('<div />').addClass('inner-item').data('src', subtitles[i].src).data('language', subtitles[i].language).html(subtitles[i].title).click(function () {
								switchTrack($(this).data('language'));
								controls.subtitles.icon.html($(this).html());
							}));
						}
						for (var i in controls.subtitles.list) {
							list.append(controls.subtitles.list[i]);
						}
						return $('<div />').addClass('control control-container').append(controls.subtitles.icon).append(list);
					}
					return null;

				case 'timeline':
					controls.time = {
						current: $('<div />').addClass('control-text time-current').html('00:00'),
						total: $('<div />').addClass('control-text time-total'),
						line: $('<div />').addClass('timeline'),
						marker: $('<div />').addClass('time-marker'),
						played: $('<div />').addClass('time-played'),
						move: function(){
							var t = (video.currentTime / video.duration * 100).toFixed(2) + '%';
							this.marker.css('left', t);
							this.played.css('width', t);
							this.current.html(secondsToTime(video.currentTime));
						}
					};
					controls.time.line.append(controls.time.marker).append(controls.time.played);
					return $('<div />').addClass('timeline-container').append($('<div />').addClass('timeline-subcontainer').append(controls.time.current).append(controls.time.line).append(controls.time.total));

				case 'volume':

					var drag = false;
					var range = {bottom: 0, height: 0, top: 0};

					controls.volume = {
						active: $('<div/>').addClass('volume-active'),
						marker: $('<div/>').addClass('volume-marker').on('mousedown', function (e) {
							drag = true;
							range.height = controls.volume.line.height();
							range.top = controls.volume.line.offset().top;
							range.bottom = range.top + range.height;
						}),
						icon: $('<div/>').addClass('control-icon').append($('<i />').addClass('fa fa-volume-down')).click(function () {
							controls.volume.toggleMuted();
						}),
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
					controls.volume.line = $('<div/>').addClass('volume-line').append(controls.volume.active).append(controls.volume.marker).click(function (e) {
						range.height = controls.volume.line.height();
						range.top = controls.volume.line.offset().top;
						range.bottom = range.top + range.height;
						if (e.pageY >= range.top && e.pageY <= range.bottom) {
							controls.volume.set((range.bottom - e.pageY) / range.height);
						}
					});
					controls.volume.container = $('<div />').addClass('control control-container').append(controls.volume.icon).append($('<div />').addClass('control-inner volume-slider').append(controls.volume.line));

					$(document).on('mousemove', function (e) {
						if (drag && e.pageY >= range.top && e.pageY <= range.bottom) {
							controls.volume.set((range.bottom - e.pageY) / range.height);
						}
					}).on('mouseup', function (e) {
						drag = false;
					});

					return controls.volume.container;

				default:
					return null;
			}
		};

		var init = function () {

			// Check if element is correctly selected.
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

			initOptions();
			initDom();
			initSubtitles();
			initControls();
			initHotKeys();
		};

		var initControls = function () {
			for (var i in options.controls) {
				var el = options.controls[i].element;
				var hasTimeline = false;
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
							if (options.controls[i].controls[k] == 'timeline')
								hasTimeline = true;
						}
						else
							console.warn('Cannot create ' + options.controls[i].controls[k] + ' control.');
					}
					if (!hasTimeline)
						el.css('width', '1px');
					container.append(el);
				}
			}
			video.playbackRate = getCookie('rate', 1);
			controls.rate.display();
			controls.volume.set(getCookie('volume', 0.4));
		};

		var initDom = function () {

			overlay = $('<div />').addClass('play-overlay');
			var videoContainer = $('<div />').addClass('leplayer-video').append(overlay);
			container = $('<div />').addClass('leplayer-container').append(videoContainer).css('width', element.width() + 'px');

			element.before(container);
			videoContainer.append(element);
			video = element[0];
			video.addEventListener('loadedmetadata', function (e) {
				overlay.css('line-height', e.target.clientHeight + 'px').html('<i class="fa fa-play"></i>');
				container.css('width', e.target.clientWidth + 'px');
				if (typeof controls.time != 'undefined')
					controls.time.total.html(secondsToTime(video.duration));
			});
			video.ontimeupdate = function(){
				controls.time.move();
			};
			overlay.click(function () {
				togglePlay();
			});
		};

		var initHotKeys = function () {
			// Space.
			element.keypress(function (e) {
				if (e.charCode == 32)
					togglePlay();
			}).click(function () {
				togglePlay();
			});
		};

		var initOptions = function () {

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
			var r = element.attr('preload');
			if (r) {
				r = r.toLowerCase();
				if (r == 'none' || r == 'metadata')
					options.preload = r;
				else
					options.preload = 'auto';
			}
			element.attr('preload', options.preload);
		};

		var initSubtitles = function () {

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

			// This is generally for Firefox only
			// because it somehow resets track list
			// for video element after DOM manipulation.

			if (video.textTracks.length == 0 && subtitles.length > 0) {
				element.children('track[kind="subtitles"]').remove();
				for (var i in subtitles) {
					element.append($('<track/>').attr('label', subtitles[i].title).attr('src', subtitles[i].src).attr('srclang', subtitles[i].language).attr('id', subtitles[i].language).attr('kind', 'subtitles'));
				}
			}
		};

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

		var secondsToTime = function(seconds){
			var h = Math.floor(seconds / 3600);
			var m = Math.floor(seconds % 3600 / 60);
			var s = Math.floor(seconds % 3600 % 60);
			var out = '';
			if (h > 0)
				out = h + ':';
			if (m < 10)
				out += '0';
			out += m + ':';
			if (s < 10)
				out += '0';
			out += s;
			return out;
		};

		var seek = function (time) {
			video.currentTime = time;
		};

		var switchTrack = function (language) {
			if (video.textTracks.length > 0) {
				for (var i = 0; i < video.textTracks.length; i++) {
					if (video.textTracks[i].language == language)
						video.textTracks[i].mode = 'showing';
					else
						video.textTracks[i].mode = 'hidden';
				}
			}
		};

		init();
		return this;
	};

	$.fn.lePlayer = function (options) {
		return this.each(function () {
			Player($(this), options);
		});
	};
}(jQuery));