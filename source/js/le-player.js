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
			width: 'auto'
		}, opts);

		var sources = [];
		var volume = 0.5;
		var video = element[0];

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

		var overlay = $('<div />').addClass('play-overlay');
		var togglePlay = function () {
			if (!video.played || video.paused) {
				overlay.hide();
				video.play();
			}
			else {
				overlay.show();
				video.pause();
			}
		};

		// Move video to container and add other stuff.
		var container = $('<div />').addClass('leplayer-container');
		element.wrap(container);
		element.after(overlay);
		setTimeout(function(){
			overlay.css('line-height', overlay.height() + 'px').html('<i class="fa fa-play-circle"></i>');
		}, 100);
		overlay.click(function(){
			togglePlay();
		});

		// Hot keys.
		element.keypress(function (e) {
			if (e.charCode == 32)
				togglePlay();
		}).click(function () {
			togglePlay();
		});
	};

	$.fn.lePlayer = function (options) {
		return this.each(function () {
			Player($(this), options);
		});
	};
}(jQuery));