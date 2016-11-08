'use strict';
/**
 * @file ErrorDisplay.js
 */


import $ from 'jquery';
import Component from './Component';

/**
 * @param {Player} player Main player
 * @param {Object} [options]
 * @class ErrorDisplay
 * @extends Component
 */
class Poster extends Component {

    constructor(player, options={}) {
        super(player, options);
    }

    /**
     * @override
     */
    createElement() {
        this.element = $('<div />')
            .css('background-image', 'url(' + this.player.options.poster + ')')
            .addClass('leplayer__poster')
    }

}

export default Poster;
