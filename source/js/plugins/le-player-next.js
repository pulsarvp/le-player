import NextComponent from '../components/NextComponent';

const Player = window.lePlayer;

Player.plugin('next', function(pluginOptions) {
	this._nextComponent = new NextComponent(this, {
		title : 'GOOGLE',
		subtitle : 'LOL',
		//url : 'google.com',
		image : './poster.jpg'
	})

	this.innerElement.append(this._nextComponent.element);
	this.on('ended', () => this._nextComponent.show());
})
