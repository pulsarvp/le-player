import $ from 'jquery';
{
	'use strict';

	let Player = function (element, opts) {
		const C_BACKWARD   = 'backward';
		const C_DIVIDER    = 'divider';
		const C_DOWNLOAD   = 'download';
		const C_FORWARD    = 'forward';
		const C_FULLSCREEN = 'fullscreen';
		const C_PLAY       = 'play';
		const C_RATE       = 'rate';
		const C_SOURCE     = 'source';
		const C_SUBTITLE   = 'subtitle';
		const C_TIMELINE   = 'timeline';
		const C_VOLUME     = 'volume';

		var options = $.extend(true, {
			autoplay : false,
			height   : 'auto',
			loop     : false,
			muted    : false,
			preload  : 'metadata',
			poster   : null,
			width    : 'auto',
			rate     : {
				step : 0.25,
				min  : 0.5,
				max  : 4.0
			},
			playback : {
				step : {
					short  : 5,
					medium : 30,
					long   : 60
				}
			},
			volume   : {
				step : 0.1
			},
			controls : {
				common     : [
					[ 'play', 'volume', 'divider', 'timeline', 'divider', 'fullscreen' ],
					[ 'rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download' ]
				],
				fullscreen : [
					[ 'play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'fullscreen' ]
				]
			}
		}, opts);

		class Control {
			constructor (cssClass, iconClass) {
				this.element = $('<div />').addClass('control ' + cssClass).append($('<i />').addClass('fa fa-' + iconClass));
			}

			static divider () {
				return $('<div />').addClass('divider');
			}

			static create (name) {
				switch (name) {
					case C_BACKWARD:
						return new BackwardControl();

					case C_DIVIDER:
						return this.divider();

					case C_DOWNLOAD:
						return new DownloadControl();

					case C_FORWARD:
						return new ForwardControl();

					case C_FULLSCREEN:
						return new FullscreenControl();

					case C_PLAY:
						return new PlayControl();

					case C_RATE:
						return new RateControl();

					case C_SOURCE:
						return new SourceControl();

					case C_SUBTITLE:
						return new SubtitleControl();

					case C_TIMELINE:
						return new TimelineControl();

					case C_VOLUME:
						return new VolumeControl();

					default:
						return null;
				}
			}
		}

		class ControlText {
			constructor (classname) {
				this.element = $('<div />').addClass('control-text ' + classname);
			}

			set text (value) {
				this.element.html(value);
			}
		}

		class ControlContainer {
			constructor (iconClass) {
				let _self        = this;
				this.iconClass   = iconClass;
				this.icon        = $('<div />').addClass('control-icon').append($('<i />').addClass('fa fa-' + iconClass));
				this.listElement = $('<div/>').addClass('control-inner');
				this.element     = $('<div />').addClass('control control-container').append(this.icon).append(this.listElement);
				this._index      = 0;
				this.list        = [];
				this.icon.click(function () { _self.onContainerClick(); });
			}

			get active () {
				for (let i in this.list)
					if (this.list[ i ].hasClass('active'))
						return this.list[ i ];
				return null;
			}

			set active (index) {
				let hasActive = false;
				for (let i in this.list) {
					if (this.list[ i ].data('index') == index) {
						this.list[ i ].addClass('active');
						this.icon.html(this.list[ i ].html());
						hasActive = true;
					}
					else
						this.list[ i ].removeClass('active');
				}
				if (!hasActive)
					this.icon.html($('<i />').addClass('fa fa-' + this.iconClass));
			}

			addItem (text, data) {
				let _self = this;
				var item  = $('<div />').addClass('inner-item').data('index', this._index).html(text).click(function () {
					_self.onItemClick($(this).data('index'));
				});
				if (typeof data == 'object') {
					for (let k in data)
						item.data(k, data[ k ]);
				}
				this._index++;
				this.list.push(item);
				this.listElement.append(item);

				return item;
			}

			getByIndex (index) {
				for (let i in this.list)
					if (this.list[ i ].data('index') == index)
						return this.list[ i ];
				return null;
			}

			onContainerClick () {
			}

			onItemClick (index) {
				this.active = index;
			}
		}

		class BackwardControl extends Control {
			constructor () {
				super('backward', 'undo');
				this.element.click(e => {
					if (video.currentTime - options.playback.step.medium > 0)
						seek(video.currentTime - options.playback.step.medium);
					else
						seek(0);
				});
			}
		}

		class DownloadControl extends Control {
			constructor () {
				super('', '');
				this.element = $('<a />').attr('href', '').attr('target', '_blank').attr('download', '').addClass('control download').append($('<i />').addClass('fa fa-download'));
			}

			set link (value) {
				this.element.attr('href', value);
			}
		}

		class ForwardControl extends Control {
			constructor () {
				super('forward', 'redo');
			}
		}

		class FullscreenControl extends Control {
			constructor () {
				super('fullscreen', 'arrows-alt');
				this.element.click(e => {
					Fullscreen.toggle();
				});
			}
		}

		class PlayControl extends Control {
			constructor () {
				super('play', 'play');
				this.element.click(e => {
					togglePlay();
				});
			}

			pause () {
				this.element.children('.fa').removeClass('fa-pause').addClass('fa-play');
			}

			play () {
				this.element.children('.fa').removeClass('fa-play').addClass('fa-pause');
			}
		}

		class RateControl {
			constructor () {
				this.down    = new Control('rate-down', 'backward');
				this.up      = new Control('rate-up', 'forward');
				this.current = new ControlText('rate-current');

				this.down.element.click(e => {
					this.decrease();
				});

				this.up.element.click(e => {
					this.increase();
				});

				this.element = $('<div />').addClass('control-container').append(this.down.element).append(this.current.element).append(this.up.element);
			}

			decrease () {
				if (video.playbackRate > options.rate.min) {
					this.up.element.removeClass('disabled');
					video.playbackRate -= options.rate.step;
					this.show();
					Cookie.set('rate', video.playbackRate);
				}
				else
					this.down.element.addClass('disabled');
			}

			load () {
				video.playbackRate = Cookie.get('rate', 1);
				this.show();
			}

			show () {
				this.current.text = '×' + video.playbackRate.toFixed(2);
			}

			increase () {
				if (video.playbackRate < options.rate.max) {
					this.down.element.removeClass('disabled');
					video.playbackRate += options.rate.step;
					this.show();
					Cookie.set('rate', video.playbackRate);
				}
				else
					this.up.element.addClass('disabled');
			}
		}

		class SourceControl extends ControlContainer {
			constructor () {
				super('bullseye');
				if (sources.length > 1) {
					for (var i in sources) {
						this.addItem(sources[ i ].title, { src : sources[ i ].src });
					}
				}
			}

			set (index) {
				let s = this.getByIndex(index);
				if (s != null) {
					element.attr('src', s.data('src'));
					controls.download = s.data('src');
				}
			}

			onItemClick (index) {
				super.onItemClick(index);
				this.set(index);
			}
		}

		class SubtitleControl extends ControlContainer {
			constructor () {
				super('commenting-o');
				if (subtitles.length > 0) {
					for (var i in subtitles) {
						this.addItem(subtitles[ i ].title, { src : subtitles[ i ].src, language : subtitles[ i ].language });
					}
				}
			}

			set track (index) {
				var t = this.getByIndex(index);
				if (t != null && video.textTracks.length > 0) {
					let language = t.data('language');
					for (var i = 0; i < video.textTracks.length; i++) {
						if (video.textTracks[ i ].language == language)
							video.textTracks[ i ].mode = 'showing';
						else
							video.textTracks[ i ].mode = 'hidden';
					}
				}
			}

			onContainerClick () {
				super.onContainerClick();
				super.onItemClick(-1);
				if (video.textTracks.length > 0) {
					for (var i = 0; i < video.textTracks.length; i++)
						video.textTracks[ i ].mode = 'hidden';
				}
			}

			onItemClick (index) {
				super.onItemClick(index);
				this.track = index;
			}
		}

		class TimelineControl {
			constructor () {
				let _self = this;

				this.drag = false;

				this.current = new ControlText('time-current');
				this.total   = new ControlText('time-total');

				this.marker = $('<div />').addClass('time-marker');

				this.markerShadow = $('<div />')
					.addClass('time-marker shadow')
					.append()
					.hide();

				this.markerShadowTime = $('<div />').addClass('time');
				this.markerTime       = $('<div />')
					.addClass('time')
					.hide();
				this.played           = $('<div />').addClass('time-played');
				this.current.text     = '00:00';
				this.line             = $('<div />')
					.addClass('timeline')
					.append(this.marker.append(this.markerTime))
					.append(this.markerShadow.append(this.markerShadowTime))
					.append(this.played)
					.on({
						'mousemove' : (e) => {
							if (this.drag) return;

							let p = this.getPosition(e.pageX);
							if (p > 0 && p < 1) {
								this.markerShadow.show();
								this.markerShadow.css('left', p * 100 + '%');
								this.markerShadowTime.html(secondsToTime(video.duration * p));
							}
							else
								this.markerShadow.hide();
						},

						'mouseleave' : (e) => {
							if (this.drag) return;
							this.markerShadow.hide()
						},

						'click' : (e) => {
							if (this.drag) return;
							seek(video.duration * this.getPosition(e.pageX));
						}
					});

				this.element = $('<div />')
					.addClass('timeline-container')
					.append($('<div />')
						.addClass('timeline-subcontainer')
						.append(this.current.element)
						.append(this.line)
						.append(this.total.element));

				this.marker.on('mousedown', (e) => {
					if (e.which != 1) return;
					this.markerShadow.hide();
					this.drag = true;
				});

				$(document).on({

					'mousemove' : (e) => {
						if (!this.drag) return;
						let p = this.getPosition(e.pageX);
						if (p > 0 && p < 1) {
							this.markerTime
								.show()
								.html(secondsToTime(video.duration * p))
							seek(video.duration * p);
						}
					},

					'mouseup' : (e) => {
						this.markerTime.hide()
						this.drag = false;
					}
				});
			}

			getPosition (x) {
				return (x - this.line.offset().left) / this.line.width();
			}

			move () {
				var t = (video.currentTime / video.duration * 100).toFixed(2) + '%';
				this.marker.css('left', t);
				this.played.css('width', t);
				this.current.text = secondsToTime(video.currentTime);
			}
		}

		class VolumeControl {
			constructor () {
				let _self = this;

				this.icon = $('<div/>')
					.addClass('control-icon')
					.append($('<i />')
						.addClass('fa fa-volume-down'))
					.click(function () {
						_self.toggleMuted();
					});

				this.marker = $('<div/>').addClass('volume-marker');

				this.active = $('<div/>').addClass('volume-active');

				this.line = $('<div/>')
					.addClass('volume-line')
					.append(this.active)
					.append(this.marker)
					.on('click', (e) => {
						if (this.drag) return;
						let p = this.getPosition(e.pageY);
						if (p >= 0 && p <= 1) {
							controls.volume = 1 - p
						}
					});

				this.element = $('<div />')
					.addClass('control control-container')
					.append(this.icon)
					.append($('<div />')
						.addClass('control-inner volume-slider')
						.append(this.line));

				this.drag = false;

				this.marker.on('mousedown', (e) => {
					if (e.which != 1) return;
					this.drag = true;
				});

				$(document).on({
					'mousemove' : (e) => {
						if (!this.drag) return;
						let p = this.getPosition(e.pageY);
						if (p >= 0 && p <= 1) {
							controls.volume = 1 - p
						}
					},

					'mouseup' : (e) => {
						this.drag = false;
					}
				});
			}

			set value (value) {
				var icon = this.icon.children('.fa').eq(-1);
				icon.removeClass();
				if (value < 0.05) {
					video.muted = true;
					icon.addClass('fa fa-volume-off');
				}
				else {
					video.muted  = false;
					video.volume = value;
					if (value < 0.5)
						icon.addClass('fa fa-volume-down');
					else
						icon.addClass('fa fa-volume-up');
					Cookie.set('volume', value);
				}

				let p = Math.round(value * 100).toString() + '%';
				this.active.css('height', p);
				this.marker.css('bottom', p);
			}

			toggleMuted () {
				if (video.muted == true) {
					this.value = Cookie.get('volume', 0.4);
				}
				else
					this.value = 0;
			}

			getPosition (y) {
				return (y - this.line.offset().top) / this.line.height();
			}

		}

		class Cookie {
			static get (name, dflt) {
				var cookies = document.cookie.split(';');
				for (var i in cookies) {
					var d = cookies[ i ].trim().split('=');
					if (d[ 0 ] == 'leplayer_' + name)
						return d[ 1 ];
				}
				return dflt;
			};

			static set (name, value) {
				var d = new Date();
				d.setDate(d.year + 1);
				document.cookie = 'leplayer_' + name + '=' + value + ';expires=' + d.toString();
			};
		}

		class ControlCollection {
			constructor (name, active) {
				this.items  = [];
				this.active = active || false;
				this.name   = name;
			}

			set download (value) {
				if (this.has(C_DOWNLOAD)) {
					this.items.download.link = value;
				}
			}

			set source (value) {
				if (this.has(C_SOURCE))
					this.items.source.set(value);
			}

			set totalTime (value) {
				if (this.has(C_TIMELINE))
					this.items.timeline.total.text = value;
			}

			set volume (value) {
				if (this.has(C_VOLUME))
					this.items.volume.value = value;
			}

			add (name) {
				if (name == C_DIVIDER)
					return Control.create(name);
				else {
					this.items[ name ] = Control.create(name);
					return this.items[ name ].element;
				}
			}

			has (name) {
				return (typeof this.items[ name ] == 'object');
			}

			hide () {
				container.find('.controls-' + this.name).hide();
			}

			init () {
				this.volume = Cookie.get('volume', 0.4);
				this.initTimeline();
				this.totalTime = secondsToTime(video.duration);
				this.initRate();
			}

			initRate () {
				if (this.has(C_RATE))
					this.items.rate.load();
			}

			initTimeline () {
				if (this.has(C_TIMELINE)) {
					if (this.items.timeline.element.width() < 20)
						this.items.timeline.element.hide();
				}
			}

			moveTimeMarker () {
				if (this.has(C_TIMELINE))
					this.items.timeline.move();
			}

			pause () {
				if (this.has(C_PLAY))
					this.items.play.pause();
			}

			play () {
				if (this.has(C_PLAY))
					this.items.play.play();
			}

			show () {
				container.find('.controls-' + this.name).show();
			}
		}

		class Controls {
			constructor () {
				this.collections               = {
					common     : new ControlCollection('common'),
					mini       : new ControlCollection('mini'),
					fullscreen : new ControlCollection('fullscreen')
				};
				this.collections.common.active = true;
			}

			get common () {
				return this.collections.common;
			}

			get fullscreen () {
				return this.collections.fullscreen;
			}

			get mini () {
				return this.collections.mini;
			}

			set download (value) {
				for (var i in this.collections) {
					this.collections[ i ].download = value;
				}
			}

			set source (value) {
				for (var i in this.collections) {
					this.collections[ i ].source = value;
				}
			}

			set totalTime (value) {
				for (var i in this.collections) {
					this.collections[ i ].totalTime = value;
				}
			}

			set volume (value) {
				for (var i in this.collections) {
					this.collections[ i ].volume = value;
				}
			}

			has (name) {
				return (typeof this.collections[ name ] == 'object');
			}

			init () {
				for (var i in this.collections) {
					this.collections[ i ].init();
				}
				this.collections.common.show();
				this.collections.mini.hide();
				this.collections.fullscreen.hide();
			}

			moveTimeMarker () {
				for (var i in this.collections)
					this.collections[ i ].moveTimeMarker();
			}

			pause () {
				for (var i in this.collections)
					this.collections[ i ].pause();
			}

			play () {
				for (var i in this.collections)
					this.collections[ i ].play();
			}
		}

		/**
		 * This class manages FullScreen API.
		 * @TODO: add fullscreenerror handler.
		 */
		class Fullscreen {
			/**
			 * @returns {boolean} Whether browser supports fullscreen mode.
			 */
			static enabled () {
				return !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
			}

			static hideElements () {
				container.removeClass('fullscreen');
				controls.fullscreen.hide();
				controls.common.show();
				controls.mini.hide();
			}

			static init () {
				if (this.enabled()) {
					// Fullscreen change handlers.
					document.addEventListener('fullscreenchange', function (e) {
						Fullscreen.toggleElements(!!(document.fullScreen || document.fullscreenElement));
					}, false);
					document.addEventListener('webkitfullscreenchange', function (e) {
						Fullscreen.toggleElements(!!document.webkitIsFullScreen);
					}, false);
					document.addEventListener('mozfullscreenchange', function () {
						Fullscreen.toggleElements(!!document.mozFullScreen);
					}, false);
					document.addEventListener('msfullscreenchange', function () {
						Fullscreen.toggleElements(!!document.msFullscreenElement);
					}, false);
				}
			}

			/**
			 * @returns {boolean} Whether browser is in fullscreen mode.
			 */
			static is () {
				return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
			}

			static showElements () {
				container.addClass('fullscreen');
				controls.fullscreen.show();
				controls.common.hide();
				controls.mini.hide();
			}

			static toggle () {
				if (this.is()) {
					if (document.exitFullscreen)                document.exitFullscreen();
					else if (document.mozCancelFullScreen)      document.mozCancelFullScreen();
					else if (document.webkitCancelFullScreen)   document.webkitCancelFullScreen();
					else if (document.msExitFullscreen)         document.msExitFullscreen();
					this.hideElements(); // @TODO: make this only if fullscreen fired.
				}
				else {
					let containerEl = container[ 0 ];
					if (containerEl.requestFullScreen)            containerEl.requestFullScreen();
					else if (containerEl.webkitRequestFullScreen) containerEl.webkitRequestFullScreen();
					else if (containerEl.mozRequestFullScreen)    containerEl.mozRequestFullScreen();
					else if (containerEl.msExitFullscreen)        containerEl.msRequestFullscreen();
					this.showElements(); // @TODO: make this only if fullscreen fired.
				}
			}

			/**
			 * Update DOM structure according to current state.
			 */
			static toggleElements (show) {
				if (!!show) {
					this.showElements();
				}
				else {
					this.hideElements();
				}
			}
		}

		var sources   = [];
		var subtitles = [];
		var volume    = 0.5;
		var video     = null;
		var controls  = new Controls();

		/**
		 * DOM container to hold video and all other stuff.
		 * @type object
		 */
		var container = null;
		var overlay   = null;

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
					sources.push({
						src   : src,
						title : $(this).attr('title')
					});
			});
			if (sources.length == 0) {
				var src = element.attr('src');
				if (src) {
					sources.push({
						src   : src,
						title : $(this).attr('title') || 'default'
					});
				}
			}
			if (sources.length == 0) {
				console.warn('No sources found.');
				return this;
			}

			initOptions();
			initDom();
			initSubtitles();
			initControls();
			initVideo();
			initHotKeys();
		};

		var initControls = function () {
			for (let name in options.controls) {
				if (controls.has(name)) {
					for (let rowIndex in options.controls[ name ]) {
						let row         = options.controls[ name ][ rowIndex ],
						    hasTimeline = false,
						    rowElement  = $('<div />').addClass('leplayer-controls controls-' + name);

						for (let i in row) {
							let controlName = row[ i ];

							if (controlName == C_DIVIDER || !controls.collections[ name ].has(controlName)) {
								// Create control only if divider or does not exist yet.
								var c = controls.collections[ name ].add(controlName);
								if (c != null) {
									rowElement.append(c);
									if (controlName == C_TIMELINE)
										hasTimeline = true;
								}
								else
									console.warn('Cannot create ' + controlName + ' control for collection ' + name + '.');
							}
						}

						if (!hasTimeline)
							rowElement.css('width', '1px');

						rowElement.find('.divider + .divider').remove();

						container.append(rowElement);
					}
				}
			}
		};

		var initDom = function () {
			overlay            = $('<div />').addClass('play-overlay').html('<i class="fa fa-play"></i>');
			var videoContainer = $('<div />').addClass('leplayer-video').append(overlay);
			container          = $('<div />').addClass('leplayer-container').append(videoContainer).css('width', element.width() + 'px');

			element.before(container);
			videoContainer.append(element);
			overlay.click(function () {
				togglePlay();
			});
		};

		var initHotKeys = function () {
			// Space.
			element.keypress(e => {
				if (e.charCode == 32) {
					//e.preventDefault();
					togglePlay();
				}
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
			var attrs = [ 'autoplay', 'loop', 'muted' ];
			for (var i in attrs) {
				var a = element.attr(attrs[ i ]);
				if (a)
					options[ attrs[ i ] ] = true;
				else if (options[ attrs[ i ] ])
					element.attr(attrs[ i ], '');
				else
					element.removeAttr(attrs[ i ]);
				element.prop(attrs[ i ], options[ attrs[ i ] ]);
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
				var title    = $(this).attr('label');
				var src      = $(this).attr('src');
				if (title.length > 0 && src.length > 0) {
					subtitles.push({
						title    : title,
						src      : src,
						language : language
					});
				}
			});
		};

		var initVideo = function () {
			video = element[ 0 ];
			if (video.readyState > HTMLMediaElement.HAVE_NOTHING)
				initVideoEvent();
			else
				video.onloadedmetadata = function () {
					initVideoEvent();
				};
		};

		var initVideoEvent = function () {
			overlay.css('line-height', video.clientHeight + 'px');
			container.css('width', video.clientWidth + 'px');

			video.ontimeupdate = function () {
				controls.moveTimeMarker();
			};

			// This is generally for Firefox only
			// because it somehow resets track list
			// for video element after DOM manipulation.

			if (video.textTracks.length == 0 && subtitles.length > 0) {
				element.children('track[kind="subtitles"]').remove();
				for (var i in subtitles) {
					element.append($('<track/>').attr('label', subtitles[ i ].title).attr('src', subtitles[ i ].src).attr('srclang', subtitles[ i ].language).attr('id', subtitles[ i ].language).attr('kind', 'subtitles'));
				}
			}

			Fullscreen.init();
			controls.init();
		};

		var togglePlay = function () {
			if (!video.played || video.paused) {
				overlay.hide();
				video.play();
				controls.play();
			}
			else {
				overlay.show();
				video.pause();
				controls.pause();
			}
		};

		var secondsToTime = function (seconds) {
			var h   = Math.floor(seconds / 3600);
			var m   = Math.floor(seconds % 3600 / 60);
			var s   = Math.floor(seconds % 3600 % 60);
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

		init();
		return this;
	};

	window.$.fn.lePlayer = function (options) {
		return this.each(function () {
			Player($(this), options);
		});
	};
}
