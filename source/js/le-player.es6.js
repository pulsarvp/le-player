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

		var options = $.extend({}, {
			autoplay : false,
			height : 'auto',
			loop : false,
			muted : false,
			preload : 'metadata',
			poster : null,
			svgPath : '../dist/svg/svg-defs.svg',
			width : 'auto',
			fullscreen : {
				hideTimelineTime : 7000
			},
			rate : {
				step : 0.25,
				min : 0.5,
				max : 4.0,
				'default' : 1
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
				},
			}
		}, opts);

		/**
		 * This class manages FullScreen API.
		 * @TODO: add fullscreenerror handler.
		 */
		class Fullscreen {

			constructor () {
				this._collection = controls.fullscreen;
				this._hideTimeout = null;
				this.fullscreenEnabled = false;
			}

			/**
			 * @returns {boolean} Whether browser supports fullscreen mode.
			 */
			enabled () {
				return !!(document.fullscreenEnabled
					|| document.mozFullScreenEnabled
					|| document.msFullscreenEnabled
					|| document.webkitSupportsFullscreen
					|| document.webkitFullscreenEnabled
					|| document.createElement('video').webkitRequestFullScreen);
			}

			init () {
				if (!this.enabled()) {
					return null;
				}
					// Fullscreen change handlers.
				$(document).on({

					'fullscreenchange' : (e) => {
						this.toggleElements(!!(document.fullScreen || document.fullscreenElement));
					},

					'webkitfullscreenchange' : (e) => {
						this.toggleElements(!!document.webkitIsFullScreen);
					},

					'mozfullscreenchange' : (e) => {
						this.toggleElements(!!document.mozFullScreen);
					},

					'msfullscreenchange' : (e) => {
						this.toggleElements(!!document.msFullscreenElement);
					},

					'webkitbeginfullscreen' : (e) => {
						this.toggleElements(true)
					},

					'webkitendfullscreen' : (e) => {
						this.toggleElements(false)
					}
				});


			}

			/**
			 * @returns {boolean} Whether browser is in fullscreen mode.
			 */
			is () {
				return !!(document.fullScreen
					|| document.webkitIsFullScreen
					|| document.mozFullScreen
					|| document.msFullscreenElement
					|| document.fullscreenElement
					|| this.fullscreenEnabled);
			}

			showElements () {
				container.addClass('fullscreen');
				controls.fullscreen.show();
				controls.common.hide();
				controls.mini.hide();

				clearTimeout(this._hideTimeout);
				this._hideTimeout = setTimeout(() => {
					this._collection.element.hide();
				}, options.fullscreen.hideTimelineTime);

				$(container).on({
					'mousemove.leplayer.fullscreen-hide-timeline' : (e) => {
						if (!$(e.currentTarget).hasClass('fullscreen')) return false;
						clearTimeout(this._hideTimeout);
						this._collection.element.show();
						this._hideTimeout = setTimeout(() => {
							this._collection.element.hide();
						}, options.fullscreen.hideTimelineTime);
					}
				})
			}

			hideElements () {
				container.removeClass('fullscreen');
				controls.fullscreen.hide();
				controls.common.show();
				controls.mini.hide();
				clearTimeout(this._hideTimeout);
				$(container).off('.leplayer.fullscreen-hide-timeline');
			}

			toggle () {
				let containerEl = container[ 0 ];
				if (this.is()) {
					if (document.exitFullscreen)                document.exitFullscreen();
					else if (document.mozCancelFullScreen)      document.mozCancelFullScreen();
					else if (document.webkitCancelFullScreen)   document.webkitCancelFullScreen();
					else if (document.msExitFullscreen)         document.msExitFullscreen();
					else if (document.webkitExitFullscreen)     document.webkitExitFullscreen();
					this.hideElements(); // @TODO: make this only if fullscreen fired.
					this.fullscreenEnabled = false;
				}
				else {
					if (containerEl.requestFullScreen)            containerEl.requestFullScreen();
					else if (containerEl.webkitRequestFullScreen) containerEl.webkitRequestFullScreen();
					else if (containerEl.mozRequestFullScreen)    containerEl.mozRequestFullScreen();
					else if (containerEl.msExitFullscreen)        containerEl.msRequestFullscreen();
					this.showElements(); // @TODO: make this only if fullscreen fired.
					this.fullscreEnabled = true;
				}
			}

			/**
			 * Update DOM structure according to current state.
			 */
			toggleElements (show) {
				if (!!show) {
					this.showElements();
				}
				else {
					this.hideElements();
				}
			}
		}

		class Video {
			constructor (ctx) {
				this._ctx = ctx;
				this._video = ctx[ 0 ];
				this.fullscreen = new Fullscreen();
				this.subtitles = [];
				this.bufferRanges = [];
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
				setTimeout(() => {
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

			get buffered () {
				return this._video.buffered;
			}

			get loaded () {
				let loaded = [];
				let media = this._video;
				/** FF4+, Chrome */
				if (
					media.buffered &&
					media.buffered.end &&
					media.duration > 0
				) {
					for (let i = 0; i < media.buffered.length; i++) {
						let start = media.buffered.start(i) / media.duration;
						let end = media.buffered.end(i) / media.duration;
						let segment = [start, end];
						loaded.push(segment);
					}
				}
				/** Safari 5, Webkit head, FF3.6, Chrome 6, IE 7/8 */
				else if (
					media.bytesTotal != null &&
					media.bytesTotal > 0 &&
					media.bufferedBytes != null
				) {
					loaded.push([0, media.bufferedBytes / media.bytesTotal]);
				}
				return loaded;
			}

			init () {
				let dfd = $.Deferred();
				this._initSubtitles();
				this._initVideo()
					.done(() => {
						this.fullscreen.init();
						controls.init();
						this._initRate();
						this._initVolume();
						dfd.resolve();
					});
				this._initCustomEvents();
				this._initHtmlEvents();

				dfd.notify();
				return dfd.promise();
			}

			togglePlay () {
				/** In safari it doesn't work */
				// if (this._video.readyState < 2) {
				// 	overlay.hide();
				// 	_showNotification('Error!');
				// 	return;
				// }
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

			trigger (eventName, ...args) {
				$(this._video).trigger.call($(this._video), `leplayer_${eventName}`, ...args);
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
				let dfd = $.Deferred();
				if (this._video.readyState > HTMLMediaElement.HAVE_NOTHING) {
					dfd.resolve()
					this._onLoadedMetaData();
				} else {
					$(this._video).one('loadedmetadata', (e) => {
						dfd.resolve()
						this._onLoadedMetaData();
					});
				}
				dfd.notify();
				return dfd.promise()
			}

			_onLoadedMetaData () {
				let _self = this;

				container
					.css('width', '100%')
					.css('max-width', this._video.clientWidth + 'px');

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
				// this.trigger('loadedmetadata')
			}

			_initHtmlEvents () {
				let mediaElement = $(this._video);
				let timerId = null;

				mediaElement.on({

					'timeupdate' : (e) => {
						controls.moveTimeMarker();
					},

					'ended' : () => {
						this.pause();
						this.trigger('ended');
					},

					'dblclick' : () => {
						clearTimeout(timerId);
						this.fullscreen.toggle();
					},

					'click' : () => {
						clearTimeout(timerId);
						timerId = setTimeout(() => {
							container.focus()
							this.togglePlay();
						}, 300);
					}

				});
			}

			_initCustomEvents () {
				let mediaElement = $(this._video);
			}
		}

		class Control {
			constructor (cssClass, iconClass, title) {
				if (iconClass) {
					this.title = title
					this.icon = new Icon(iconClass);
					this.icon.element.on({
						'click' : this._onIconClick.bind(this),
						'leplayer_icon_click' : this.onIconClick.bind(this)
					})
				}
				this.element = $('<div />')
					.addClass('control ' + cssClass)
					.append(this.icon && this.icon.element)
					.attr('title', this.title)
					.on({
						'click' : this._onClick.bind(this),
						'leplayer_click' : this.onClick.bind(this)
					});

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

			disable () {
				this.disabled = true
				this.element.addClass('disabled');
			}

			_onClick (e) {
				if (this.disabled) {
					return false;
				}
				this.element.trigger('leplayer_click');
			}

			_onIconClick (e) {
				if (this.disabled) {
					return false;
				}
				this.icon.element.trigger('leplayer_icon_click')
			}

			onClick (e) {
				e.preventDefault();
			}

			onIconClick (e) {
				e.preventDefault();
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

		class ControlContainer extends Control {
			constructor (name, iconClass, title) {
				super(name, iconClass, title)
				this.iconClass = iconClass;
				this.listElement = $('<div/>').addClass('control-inner');
				this.element.addClass('control-container')
					.append(this.listElement);
				this._index = 0;
				this.list = [];
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
						this.icon.element.html(this.list[ i ].html());
						hasActive = true;
					}
					else
						this.list[ i ].removeClass('active');
				}
				if (!hasActive)
					this.icon.iconName = this.iconClass
			}

			addItem (text, data) {
				let _self = this;
				var item = $('<div />')
					.addClass('inner-item')
					.data('index', this._index)
					.html(text)
					/** TODO: Refactor this callback and event */
					.on('click', () => {
						this.onItemClick(item.data('index'));
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

			onItemClick (index) {
				this.active = index;
			}
		}

		class BackwardControl extends Control {

			constructor () {
				super('backward', 'undo', `Отмотать назад на ${options.playback.step.medium} секунд`);
			}

			onClick (e) {
				super.onClick(e);
				video.currentTime -= options.playback.step.medium;
			}
		}

		class DownloadControl extends Control {
			constructor () {
				super('', '');
				let icon = new Icon('download');
				this.element = $('<a />')
					.attr('href', '')
					.attr('target', '_blank')
					.attr('download', '')
					.attr('title', 'Скачать видео')
					.addClass('control download')
					.append(icon.element);
			}

			set link (value) {
				this.element.attr('href', value);
			}
		}

		class ForwardControl extends Control {
			constructor () {
				super('forward', 'redo', `Отмотать вперед на ${options.playback.step.medium} секунд`);
			}
		}

		class FullscreenControl extends Control {
			constructor () {
				super('fullscreen', 'arrows-alt', `Развернуть/свернуть на полный экран`);
			}

			onClick (e) {
				super.onClick(e)
				video.fullscreen.toggle();
			}
		}

		class PlayControl extends Control {
			constructor () {
				super('play', 'play', 'Воспроизвести видео');
			}

			pause () {
				this.icon.iconName = 'play';
				this.element.attr('title', 'Воспроизвести видео');
			}

			play () {
				this.icon.iconName = 'pause';
				this.element.attr('title', 'Поставить на паузу');
			}

			onClick(e) {
				super.onClick(e);
				video.togglePlay();
			}
		}

		class RateControl extends Control {
			constructor () {
				super();
				this.down = new Control('rate-down', 'backward', 'Уменьшить скорость проигрывания');
				this.up = new Control('rate-up', 'forward', 'Увеличить скоросить проигрывания');
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
				if (this.disabled) {
					return false;
				}
				this.up.element.removeClass('disabled');
				this.down.element.removeClass('disabled');
				if (video.rate <= options.rate.min)
					this.down.element.addClass('disabled');
				else if (video.rate >= options.rate.max)
					this.up.element.addClass('disabled');
				this.show();
			}

			init () {
				let rate = Cookie.get('rate', options.rate.default);
				this.show(rate);
			}

			show (value) {
				value = value || video.rate;
				value = parseFloat(value)
					.toFixed(2)
					.toString()
					.replace(/,/g, '.');
				this.current.text = '×' + value;
			}

			disable() {
				this.disabled = true;
				this.down.disable.apply(this.down, arguments);
				this.up.disable.apply(this.up, arguments);
			}
		}

		class SourceControl extends ControlContainer {
			constructor () {
				super('source-control', 'bullseye', 'Качество');
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
				super('subtitle-control', 'commenting-o', 'Субтитры');
			}

			init () {
				if (video.subtitles.length > 0) {
					for (var i in video.subtitles) {
						if (!video.subtitles.hasOwnProperty(i)) continue;
						let item = video.subtitles[ i ];
						this.addItem(item.title, {
							src : item.src,
							language : item.language
						});
					}
				}
				else
					this.disable();
			}

			onIconClick (e) {
				super.onIconClick(e);
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

		class TimelineControl extends Control {
			constructor () {
				super('timeline');
				let duration = video.duration;

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
				this.buffered = $('<div />')
				this.current.text = '00:00';
				this.line = $('<div />')
					.addClass('timeline')
					.append(this.marker.append(this.markerTime))
					.append(this.markerShadow.append(this.markerShadowTime))
					.append(this.played)
					.append(this.buffered)
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
							this.hardMove(this.getPosition(e.pageX));
							video.seek(video.duration * this.getPosition(e.pageX));
						},

						'touchmove' : (e) => {
						}
					});

				this.element.addClass('timeline-container')
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

				/** TODO: Solve problem with open events api */
				$(video._video).on('leplayer_ended', e => {
					clearInterval(this.watchBufferInterval);
				})

				this._initWatchBuffer();
			}

			getPosition (x) {
				return (x - this.line.offset().left) / this.line.width();
			}

			hardMove (percent) {
				let currentTime = video.duration * percent;
				percent = percent * 100;
				this.marker.css('left', percent + '%');
				this.played.css('width', percent + '%');
				this.current.text = secondsToTime(currentTime);
			}

			move () {
				let percent = (video.currentTime / video.duration * 100).toFixed(2);
				let currentTime = video.currentTime;
								this.marker.css('left', percent + '%');
				this.played.css('width', percent + '%');
				this.current.text = secondsToTime(currentTime);
			}

			_initWatchBuffer () {
				clearInterval(this.watchBufferInterval);
				let updateProgressBar = () => {
					const END = 1;
					const START = 0;
					let result = $('');
					video.loaded.forEach(item => {
						let domItem = $('<div />').addClass('time-buffered');
						domItem.css({
							'left' : item[START] * 100 + '%',
							'width' : (item[END] - item[START]) * 100 + '%'
						});
						result = result.add(domItem);
					});
					this.buffered.html(result);

					if (video.loaded[0] && (1 - video.loaded[0][END]) <= 0.05) {
						clearInterval(this.watchBufferInterval);
					}
				}
				this.watchBufferInterval = setInterval(updateProgressBar, 500);
			}
		}

		class VolumeControl extends Control {
			constructor () {
				super('volume-control', 'volume-down');
				let _self = this;

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

				this.element.addClass('control-container')
					.append($('<div />')
						.addClass('control-inner volume-slider')
						.append(this.line));

				this.icon.element.attr('title', 'Отключить звук');

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
				if (value < options.volume.mutelimit) {
					this.icon.iconName = 'volume-off';
				} else if (value < 0.5) {
					this.icon.iconName = 'volume-down';
				} else {
					this.icon.iconName = 'volume-up';
				}

				let p = Math.round(value * 100).toString() + '%';
				this.active.css('height', p);
				this.marker.css('bottom', p);
			}

			toggleMuted () {
				if (video.muted == true) {
					this.value = Cookie.get('volume', options.volume.default);
				} else {
					this.value = 0;
				}

			}

			getPosition (y) {
				return (y - this.line.offset().top) / this.line.height();
			}

			onIconClick (e) {
				super.onIconClick(e);
				this.toggleMuted();
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

		class UserAgent {

		}

		class ControlCollection {
			constructor (name, active) {
				this.items = {};
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

			disable () {
				for (let i in this.items) {
					if (!this.items.hasOwnProperty(i)) continue;
					this.items[ i ].disable();
				}
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
				this.element.hide();
			}

			init () {
				this.element = container.find(`.controls-${this.name}`)
				for (let i in this.items) {
					if (!this.items.hasOwnProperty(i)) continue;
					$.isFunction(this.items[i].init) && this.items[i].init();
				}
				this.initTimeline();
				this.totalTime = secondsToTime(video.duration);
				this.download = sources[ 0 ].src;
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

			disable () {
				for (var i in this.collections) {
					this.collections[ i ].disable();
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

		class Icon {
			constructor(iconName, title) {
				this._useTag = document.createElementNS('http://www.w3.org/2000/svg', 'use');
				this._svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

				this.iconName = this._iconName = iconName;
				this._svgTag.appendChild(this._useTag);
				this.element = $('<div />')
					.addClass('leplayer-icon')
					.attr('title', title)
					.append($(this._svgTag));
			}

			set iconName(iconName) {
				let attrNS = ['http://www.w3.org/1999/xlink', 'href']
				this._useTag.removeAttributeNS(...attrNS, `${options.svgPath}#leplayer-icon-${this.iconName}`)
				this._useTag.setAttributeNS(...attrNS, `${options.svgPath}#leplayer-icon-${iconName}`)
				this._iconName = iconName;
			}

			get iconName () {
				return this._iconName;
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

		let _createNotification = (opt) => {
			let notification, closeButton;
			notification = $('<div />')
				.addClass('leplayer-notification')
				.append(opt.text);
			return notification;
		}

		var _showNotification = (msg) => {
			let notification = _createNotification({ text: msg });
			notification = $('<div />')
				.addClass('leplayer-notification')
				.append(msg);
			container.append(notification);

		}

		var init = function () {
			// Check if element is correctly selected.
			if (element.prop('tagName').toLowerCase() != 'video') {
				console.warn('Incorrect element selected.');
				return this;
			}

			initOptions();
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

			/** TODO: Use promise to async run this */
			initDom();
			initControls();
			video.init().done(() => { video.trigger('inited')});
			initHotKeys();

			// video.trigger(`inited`);

		};

		var initControls = function () {
			for (let name in options.controls) {
				if (!controls.has(name)) continue;
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
		};

		var initDom = function () {
			let videoContainer;
			let icon = new Icon('play');
			overlay = $('<div />')
				.addClass('play-overlay')
				.append(icon.element);
			videoContainer = $('<div />')
				.addClass('leplayer-video')
				.append(overlay);
			container = $('<div />')
				.addClass('leplayer-container')
				.append(videoContainer)
				.attr('tabindex', 0)
				.css('width', element.width() + 'px');

			element.before(container);
			videoContainer.append(element);
			overlay.on({
				'click'    : (e) => { element.trigger('click'); },
				'dblclick' : (e) => { element.trigger('dblclick'); }
			});
		};

		var initHotKeys = function () {

			let isKeyBinding = (e, binding) => {
				return ((e.which === binding.key) || (e.key === binding.key)) &&
						(!!binding.shiftKey == e.shiftKey) &&
						(!!binding.ctrlKey == e.ctrlKey)
			}

			$(container).bind('keydown.leplayer.hotkey', (e) => {
				let _isFocused = isFocused();
				if (_isFocused) {
					$.each(options.keyBinding, (action, binding) => {
						if( isKeyBinding(e, binding) ) {
							e.preventDefault();
							binding.fn(video);
							return false;
						}
					})
				}
			})
		};

		var initOptions = function () {
			let height, width, poster, attrs, preload;
			element.removeAttr('controls');

			height = element.attr('height');
			if (height) {
				options.height = height + 'px';
				element.removeAttr('height');
			}
			element.css('height', options.height);

			width = element.attr('width');
			if (width) {
				options.width = width + 'px';
				element.removeAttr('width');
			}
			element.css('width', options.width);

			poster = element.attr('poster');
			if (poster)
				options.poster = poster;
			else if (options.poster)
				element.attr('poster', options.poster);

			attrs = [ 'autoplay', 'loop', 'muted' ];
			attrs.forEach((item) => {
				var a = element.attr(item);
				if (a) {
					options[ item ] = true;
				} else if (options[ item ]) {
					element.attr(item, '');
				} else {
					element.removeAttr(item);
				}
				element.prop(item, options[ item ]);
			})

			preload = element.attr('preload');
			if (preload) {
				preload = preload.toLowerCase();
				if (preload == 'none' || preload == 'metadata')
					options.preload = preload;
				else
					options.preload = 'auto';
			}

			if (options.sources) {
				if (Array.isArray(options.sources)) {
					options.sources.forEach((item) => {
						let source = $('<source />');
						if (typeof item === 'string') {
							source.attr('src', item)
						} else {
							source.attr('src', item.src)
						}
						source.attr('title', item.title || 'default');
						element.append(source);
					})
				} else if (typeof options.sources === 'string') {
					element.attr('src', options.sources)
				}
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


		var isFocused = function () {
			let focused = $(container).find(':focus');
			return (focused.length > 0) || $(container).is(':focus');
		}


		init();


		return this;
	};

	window.$.fn.lePlayer = function (options) {
		return this.each(function () {
			return new Player($(this), options);
		});
	};
}(jQuery));
