'use strict';

import $ from 'jquery';

const Player = window.lePlayer || window.$.lePlayer;
const defaultOptions = {
	videoPlayed : [25, 50, 100],
	videoPlayedDelta : 5,
	volumeChangeDelay : 1000,
	rateChangeDelay : 2000
}

Player.plugin('ga', function(pluginOptions) {
	const options = $.extend({}, defaultOptions, pluginOptions);
	const player = this;

	if (!window.ga) {
		console.error('Google Analytics does not exist');
		return;
	}

	player.on('firstplay', (e) => {
		window.ga(
			'send',
			'event',
			'Player Video Started'
		)
	});

	player.on('controlclick', (e, data) => {
		const control = data.control;
		const {name, collection} = control.options;
		if(name) {
			window.ga(
				'send',
				'event',
				'Player Control Click',
				name,
				collection
			)
		}
	});

	player.on('sectionsclick', (e, data) => {
		window.ga(
			'send',
			'event',
			'Player Sections',
			'Click',
			player.view
		)
	});


	let volumeChangeTimeout = null;

	player.on('volumechange', (e, data) => {
		clearTimeout(volumeChangeTimeout);

		volumeChangeTimeout = setTimeout(_ => {
			const value = data.volume;
			window.ga(
				'send',
				'event',
				'Player Volume Change',
				Number(value).toFixed(1)
			)

		}, options.volumeChangeDelay);
	});

	let rateChangeTimeout = null;
	player.on('ratechange', (e, data) => {
		clearTimeout(rateChangeTimeout);

		rateChangeTimeout = setTimeout(_ => {
			const value = data.rate;
			window.ga(
				'send',
				'event',
				'Player Rate Change',
				value
			)

		}, options.rateChangeDelay);
	})


	let playedEventsSent = {};
	player.on('timeupdate', () => {
		const percent = player.video.playedPercentage;
		const delta = options.videoPlayedDelta;
		options.videoPlayed.forEach(item => {
			if (
				!playedEventsSent[item] &&
				Math.abs(percent - item) < delta
			) {
				window.ga(
					'send',
					'event',
					'Player Video Played',
					`${item - delta}-${item}%`
				);
				playedEventsSent[item] = true;

			}
		})
	});


	// First qualitychange fired on player init, and we don't need track this to GA
	let loadQuality = false;
	player.on('qualitychange', function(e) {
		if(!loadQuality) {
			loadQuality = true;
			return
		}

		if(player.video.playbackQuality != null) {
			window.ga(
				'send',
				'event',
				'Player Change Quality',
				player.video.playbackQuality.title
			)
		}
	})

})
