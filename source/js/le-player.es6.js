(function ($) {
	'use strict';

	let Player = function (element, opts) {
		const C_BACKWARD = 'backward';
		const C_DIVIDER = 'divider';
		const C_DOWNLOAD = 'download';
		const C_FORWARD = 'forward';
		const C_FULLSCREEN = 'fullscreen';
		const C_PLAY = 'play';
		const C_RATE = 'rate';
		const C_SOURCE = 'source';
		const C_SUBTITLE = 'subtitle';
		const C_TIMELINE = 'timeline';
		const C_VOLUME = 'volume';

		var options = $.extend(true, {
			autoplay : false,
			height : 'auto',
			loop : false,
			muted : false,
			preload : 'metadata',
			poster : null,
			width : 'auto',
			rate : {
				step : 0.25,
				min : 0.5,
				max : 4.0,
				default : 1
			},
			playback : {
				step : {
					short : 5,
					medium : 30,
					long : 60
				}
			},
			controls : {
				common : [
					[ 'play', 'volume', 'divider', 'timeline', 'divider', 'fullscreen' ],
					[ 'rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download' ]
				],
				fullscreen : [
					[ 'play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'fullscreen' ]
				]
			},
			volume : {
				default : 0.4,
				mutelimit : 0.05,
				step : 0.1
			},
			keyBinding : {
				play : {
					key : 32,
					fn : (video) => {
						video.togglePlay();
					}
				},
				backwardMedium : {
					key : 37,
					fn : (video) => {
						video.currentTime -= options.playback.step.medium;
					}
				},
				forwardMedium : {
					key : 39,
					fn : (video) => {
						video.currentTime += options.playback.step.medium;
					}
				},
				backwardShort : {
					shiftKey : true,
					key : 37,
					fn : (video) => {
						video.currentTime -= options.playback.step.short;
					}
				},
				forwardShort : {
					shiftKey : true,
					key : 39,
					fn : (video) => {
						video.currentTime += options.playback.step.short;
					}
				},

				volumeUp : {
					key : 38,
					fn : (video) => {
						video.volume += options.volume.step;
					}
				},

				volumeDown : {
					key : 40,
					fn : (video) => {
						video.volume -= options.volume.step;
					}
				}
			}
		}, opts);

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
				setOverlaySize();
			}
		}

		class Video {
			constructor (ctx) {
				this._ctx = ctx;
				this._video = ctx[ 0 ];
				// this.fullscreen = new Fullscreen();
				this.subtitles = [];
				this.playbackRate = this._video.playbackRate;
			}

			get currentTime () {
				return this._video.currentTime;
			}

			set currentTime (value) {
				if (value > this.duration) {
					this._video.currentTime = this.duration
				} else if (value < 0 ) {
					this._video.currentTime = 0
				} else {
					this._video.currentTime = value;
				}
			}

			get duration () {
				return this._video.duration;
			}

			get height () {
				return this._video.clientHeight;
			}

			get rate () {
				return this._video.playbackRate;
			}

			get width () {
				return this._video.clientWidth;
			}

			set rate (value) {
				if ( value <= options.rate.max && value >= options.rate.min ) {
					this._video.playbackRate = value;
				}
				/** TODO: Chanche controls.rate in event handler */
				controls.rate = this._video.playbackRate;
			}

			set source (value) {
				let time = this._video.currentTime;
				let rate = this._video.playbackRate;
				let stop = (!this._video.played || this._video.paused);
				this._ctx.attr('src', value);
				this._video = this._ctx[ 0 ];
				this._video.playbackRate = rate;
				this._video.currentTime = time;
				if (stop)
					this.pause();
				else
					this.play();

				// @TODO make this right way
				setTimeout(function () {
					setOverlaySize();
					controls.totalTime = secondsToTime(this._video.duration);
				}, 100);

			}

			set track (value) {
				for (var i = 0; i < this._video.textTracks.length; i++) {
					if (this._video.textTracks[ i ].language == value)
						this._video.textTracks[ i ].mode = 'showing';
					else
						this._video.textTracks[ i ].mode = 'hidden';
				}
			}

			get volume () {
				return this._video.volume;
			}

			set volume (value) {
				if (value > 1) {
					this._video.volume = 1;
				} else if (value < options.volume.mutelimit) {
					this._video.volume = 0;
				} else {
					this._video.volume = value;
				}
				this._video.mute = (value < options.volume.mutelimit);
				controls.volume = this._video.volume;
			}

			init () {
				this._initSubtitles();
				this._initVideo();
				this._initRate();
				this._initVolume();
			}

			togglePlay () {
				if (!this._video.played || this._video.paused) {
					this.play();
				} else {
					this.pause();
				}
			}

			seek (time) {
				this._video.currentTime = time;
			}

			play () {
				overlay.hide();
				controls.play();
				return this._video.play();
			}

			pause () {
				overlay.show();
				controls.pause();
				return this._video.pause();
			}

			_initRate () {
				this.rate = Cookie.get('rate', options.rate.default);
			}

			_initVolume () {
				this.volume = Cookie.get('volume', options.volume.default);
			}

			_initSubtitles () {
				let _self = this;
				this._ctx.children('track[kind="subtitles"]').each(function () {
					let language = $(this).attr('srclang');
					let title = $(this).attr('label');
					let src = $(this).attr('src');
					if (title.length > 0 && src.length > 0) {
						_self.subtitles.push({
							title : title,
							src : src,
							language : language
						});
					}
				});
			}

			_initVideo () {
				if (this._video.readyState > HTMLMediaElement.HAVE_NOTHING) {
					this._initVideoEvent();
				} else {
					this._video.onloadedmetadata = () => {
						this._initVideoEvent();
					};
				}
			}

			_initVideoEvent () {
				let _self = this;
				let mediaElement = $(this._video);

				setOverlaySize();
				container.css('width', this._video.clientWidth + 'px');

				mediaElement.on({
					'timeupdate' : () => {
						controls.moveTimeMarker();
					},
					'ended' : () => {
						this.pause();
					}
				});

				// This is generally for Firefox only
				// because it somehow resets track list
				// for video element after DOM manipulation.

				if (this._video.textTracks.length == 0 && this.subtitles.length > 0) {
					this._ctx.children('track[kind="subtitles"]').remove();
					for (var i in this.subtitles) {
						if (this.subtitles.hasOwnProperty(i)) {
							this._ctx
								.append($('<track/>')
									.attr('label', this.subtitles[ i ].title)
									.attr('src', this.subtitles[ i ].src)
									.attr('srclang', this.subtitles[ i ].language)
									.attr('id', this.subtitles[ i ].language)
									.attr('kind', 'subtitles'));
						}
					}
				}
				Fullscreen.init();
				controls.init();
				this._video.onloadedmetadata = null;
			}
		}

		class Control {
			constructor (cssClass, iconClass) {
				this.element = $('<div />')
					.addClass('control ' + cssClass)
					.append($('<i />')
						.addClass('fa fa-' + iconClass));
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
				let _self = this;
				this.iconClass = iconClass;
				this.icon = $('<div />')
					.addClass('control-icon')
					.append($('<i />')
						.addClass('fa fa-' + iconClass));
				this.listElement = $('<div/>').addClass('control-inner');
				this.element = $('<div />')
					.addClass('control control-container')
					.append(this.icon)
					.append(this.listElement);
				this._index = 0;
				this.list = [];
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
				var item = $('<div />').addClass('inner-item').data('index', this._index).html(text).click(function () {
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

			disable () {
				this.element.addClass('disabled');
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
					video.currentTime -= options.playback.step.medium;
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
					video.togglePlay();
				});
			}

			pause () {
				this.element
					.children('.fa')
					.removeClass('fa-pause')
					.addClass('fa-play');
			}

			play () {
				this.element
					.children('.fa')
					.removeClass('fa-play')
					.addClass('fa-pause');
			}
		}

		class RateControl {
			constructor () {
				this.down = new Control('rate-down', 'backward');
				this.up = new Control('rate-up', 'forward');
				this.current = new ControlText('rate-current');

				this.down.element.click(e => {
					video.rate -= options.rate.step;
				});

				this.up.element.click(e => {
					video.rate += options.rate.step;
				});

				this.element = $('<div />')
					.addClass('control-container')
					.append(this.down.element)
					.append(this.current.element)
					.append(this.up.element);
			}

			set (value) {
				this.up.element.removeClass('disabled');
				this.down.element.removeClass('disabled');
				if (video.rate <= options.rate.min)
					this.down.element.addClass('disabled');
				else if (video.rate >= options.rate.max)
					this.up.element.addClass('disabled');
				this.show();
			}

			show () {
				this.current.text = '×' + video.rate.toFixed(2).toString().replace(',', '.');
			}
		}

		class SourceControl extends ControlContainer {
			constructor () {
				super('bullseye');
				/** TODO: Move sources to the arguments in constror */
				if (sources.length > 1) {
					for (var i in sources) {
						this.addItem(sources[ i ].title, { src : sources[ i ].src });
					}
				}
				else
					this.disable();
			}

			set (index) {
				/** TODO: Emit event on set source*/
				let s = this.getByIndex(index);
				if (s != null) {
					video.source = s.data('src');
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
			}

			init () {
				if (video.subtitles.length > 0) {
					for (var i in video.subtitles) {
						if (video.subtitles.hasOwnProperty(i)) {
							let item = video.subtitles[ i ];
							this.addItem(item.title, {
								src : item.src,
								language : item.language
							});
						}
					}
				}
				else
					this.disable();
			}

			onContainerClick () {
				super.onContainerClick();
				this.onItemClick(-1);
			}

			onItemClick (index) {
				super.onItemClick(index);
				let t = this.getByIndex(index);
				if (t != null)
					video.track = t.data('language');
				else
					video.track = -1;
			}
		}

		class TimelineControl {
			constructor () {
				let _self = this,
					duration = video.duration;

				this.drag = false;

				this.current = new ControlText('time-current');
				this.total = new ControlText('time-total');

				this.marker = $('<div />').addClass('time-marker');

				this.markerShadow = $('<div />')
					.addClass('time-marker shadow')
					.append()
					.hide();

				this.markerShadowTime = $('<div />').addClass('time');
				this.markerTime = $('<div />')
					.addClass('time')
					.hide();
				this.played = $('<div />').addClass('time-played');
				this.current.text = '00:00';
				this.line = $('<div />')
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

						'mousedown' : (e) => {
						},

						'click' : (e) => {
							if (e.which !== 1) return;
							if (this.drag) return;
							video.seek(video.duration * this.getPosition(e.pageX));
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
					if (e.which !== 1) return;
					e.preventDefault();
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
							video.seek(video.duration * p);
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
				var percent = (video.currentTime / video.duration * 100).toFixed(2);
				if (percent == 100) {
					controls.pause()
				}
				this.marker.css('left', percent + '%');
				this.played.css('width', percent + '%');
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
							video.volume = 1 - p;
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
							video.volume = 1 - p
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
				if (value < options.volume.mutelimit) {
					icon.addClass('fa fa-volume-off');
				}
				else {
					if (value < 0.5)
						icon.addClass('fa fa-volume-down');
					else
						icon.addClass('fa fa-volume-up');
				}

				let p = Math.round(value * 100).toString() + '%';
				this.active.css('height', p);
				this.marker.css('bottom', p);
			}

			toggleMuted () {
				if (video.muted == true) {
					this.value = Cookie.get('volume', options.volume.default);
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
				this.items = [];
				this.active = active || false;
				this.name = name;
			}

			set download (value) {
				if (this.has(C_DOWNLOAD)) {
					this.items.download.link = value;
				}
			}

			set rate (value) {
				if (this.has(C_RATE)) {
					this.items.rate.set(value);
				}
			}

			set source (value) {
				if (this.has(C_SOURCE)) {
					this.items.source.set(value);
				}
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
				this.initTimeline();
				this.totalTime = secondsToTime(video.duration);
				this.download = sources[ 0 ].src;
				this.initSubtitles();
			}

			initSubtitles () {
				if (this.has(C_SUBTITLE)) {
					this.items[ C_SUBTITLE ].init();
				}
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
				this.collections = {
					common : new ControlCollection('common'),
					mini : new ControlCollection('mini'),
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

			set rate (value) {
				Cookie.set('rate', value);
				for (var i in this.collections) {
					this.collections[ i ].rate = value;
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
				Cookie.set('volume', value);
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

		var sources = [];
		var subtitles = [];
		var volume = options.volume.default;
		var video = null;
		var controls = new Controls();

		/**
		 * DOM container to hold video and all other stuff.
		 * @type object
		 */
		var container = null;
		var overlay = null;

		var init = function () {
			// Check if element is correctly selected.
			if (element.prop('tagName').toLowerCase() != 'video') {
				console.warn('Incorrect element selected.');
				return this;
			}

			// Set source.
			// @TODO move this to Video class
			element.children('source').each(function () {
				var src = $(this).attr('src');
				if (src)
					sources.push({
						src : src,
						title : $(this).attr('title')
					});
			});
			if (sources.length == 0) {
				var src = element.attr('src');
				if (src) {
					sources.push({
						src : src,
						title : $(this).attr('title') || 'default'
					});
				}
			}
			if (sources.length == 0) {
				console.warn('No sources found.');
				return this;
			}
			video = new Video(element);

			initOptions();
			initDom();
			initControls();
			video.init();

			initHotKeys();
		};

		var initControls = function () {
			for (let name in options.controls) {
				if (controls.has(name)) {
					for (let rowIndex in options.controls[ name ]) {
						let row = options.controls[ name ][ rowIndex ],
							hasTimeline = false,
							rowElement = $('<div />').addClass('leplayer-controls controls-' + name);

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
			overlay = $('<div />')
				.addClass('play-overlay')
				.html('<i class="fa fa-play"></i>');
			var videoContainer = $('<div />')
				.addClass('leplayer-video')
				.append(overlay);
			container = $('<div />')
				.addClass('leplayer-container')
				.append(videoContainer)
				.attr('tabindex', 0)
				.css('width', element.width() + 'px');

			element.before(container);
			videoContainer.append(element);
			overlay.on('click',function () {
				container.focus();
				video.togglePlay();
			});
		};

		var initHotKeys = function () {

			let isKeyBinding = (e, binding) => {
				return ((e.which === binding.key) || (e.key === binding.key)) &&
						(!!binding.shiftKey == e.shiftKey) &&
						(!!binding.ctrlKey == e.ctrlKey)
			}

			$(document).bind('keydown', (e) => {
				let _isFocused = isFocused();
				if (_isFocused) {
					$.each(options.keyBinding, (action, binding) => {
						if( isKeyBinding(e, binding) ) {
							event.preventDefault();
							binding.fn(video);
							return false;
						}
					})
				}
			})

			/** TODO: Click event handler should not be in initHotKeys funct */
			element.click(function () {
				video.togglePlay();
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

		var secondsToTime = function (seconds) {
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

		var setOverlaySize = function () {
			overlay.css('line-height', video.height + 'px');
		};

		var isFocused = function () {
			let focused = $(container).find(':focus');
			return (focused.length > 0) || $(container).is(':focus');
		}

		init();


		return this;
	};

	window.$.fn.lePlayer = function (options) {
		return this.each(function () {
			Player($(this), options);
		});
	};
}(jQuery));
