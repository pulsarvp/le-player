import $ from 'jquery';
import Entity from './Entity';
import Component from '../components/Component';

function loadScript(url) {
	return $.getScript(url);
}

const apiLoaded = loadScript('https://www.youtube.com/iframe_api');

class Youtube extends Entity {
	constructor(player) {
		super(player, options);

		apiLoaded.then(this.initYTPlayer.bind(this))

	}

	createElement() {
		
	}

	initYTPlayer() {
		let ytOptions = {};

		this.ytPlayer = new YT.player(this.element, {
			playerVars : ytOptions
		})
	}
}


Component.registerComponent('Youtube', Youtube);
export default Youtube;
