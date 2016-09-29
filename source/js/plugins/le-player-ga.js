import $ from 'jquery';

window.$.lePlayer.plugin('ga', function(pluginOptions) {
	const player = this;

	player.on('controlclick', (e, data) => {
		const control = data.control;
		const {name, collection} = control.options;
		console.log(name, collection);
		if(name) {
			window.ga(
				'send',
				'event',
				'Player Control Click',
				name,
				collection
			)
		}
	})

	player.on('sectionsclick', (e, data) => {
		window.ga(
			'send',
			'event',
			'Player Sections',
			'Click',
		)
	})

})
