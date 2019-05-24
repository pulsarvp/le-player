/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(77);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = $;

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Player = window.lePlayer;
	var Component = Player.getComponent('Component');
	var Icon = Player.getComponent('Icon');
	var secondsToTime = Player.secondsToTime;
	
	var RadialBar = function (_Component) {
		_inherits(RadialBar, _Component);
	
		function RadialBar(player, options) {
			_classCallCheck(this, RadialBar);
	
			options = _jquery2.default.extend({}, {
				strokeDasharray: 293,
				size: 98
			}, options);
	
			var _this = _possibleConstructorReturn(this, (RadialBar.__proto__ || Object.getPrototypeOf(RadialBar)).call(this, player, options));
	
			_this._circleElement = _this.element.find('svg circle');
			return _this;
		}
	
		_createClass(RadialBar, [{
			key: 'createElement',
			value: function createElement() {
				var _options = this.options,
				    strokeDasharray = _options.strokeDasharray,
				    size = _options.size;
	
				var template = ('\n\t\t\t<div class="leplayer-next__play leplayer-play-button">\n                <svg height="100%" version="1.1" viewBox="0 0 ' + size + ' ' + size + '" class="leplayer-next__svg-spinner">\n                    <circle cx="' + -size / 2 + '" cy="' + size / 2 + '" fill-opacity="0" r="46.5" stroke="currentColor" stroke-dasharray="' + strokeDasharray + '" stroke-dashoffset="' + -1 * strokeDasharray + '" stroke-width="6" transform="rotate(-90)">\n                    </circle>\n                </svg>\n\t\t\t\t<div class="leplayer-next__button leplayer-play-button__button">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t').trim();
				this.element = (0, _jquery2.default)('<div />').html(template).contents();
	
				this.element.find('.leplayer-next__button').append(new Icon(this.player, { iconName: 'play' }).element);
	
				return this.element;
			}
		}, {
			key: 'startAnimation',
			value: function startAnimation(cb) {
				this._circleElement.stop().animate({
					'stroke-dashoffset': -2 * this.options.strokeDasharray
				}, this.options.timeout, cb);
			}
		}, {
			key: 'stopAnimation',
			value: function stopAnimation() {
				this._circleElement.stop();
			}
		}, {
			key: 'radial',
			set: function set(value) {
				this._radial = value;
				this._circleElement.css('stroke-dashoffset', -(value + 1) * this.options.strokeDasharray);
			},
			get: function get() {
				return this._radial;
			}
		}]);
	
		return RadialBar;
	}(Component);
	
	var NextComponent = function (_Component2) {
		_inherits(NextComponent, _Component2);
	
		function NextComponent(player, options) {
			_classCallCheck(this, NextComponent);
	
			options = _jquery2.default.extend({}, {
				title: '',
				description: '',
				timeout: 10000,
				auto: false,
				fn: function fn() {}
			}, options);
	
			var _this2 = _possibleConstructorReturn(this, (NextComponent.__proto__ || Object.getPrototypeOf(NextComponent)).call(this, player, options));
	
			_this2.cancelButton = _this2.element.find('.leplayer-next__cancel');
			_this2.player.on('play', function () {
				return _this2.hide();
			});
			_this2.player.on('loadstart', function () {
				return _this2.hide();
			});
			_this2.player.on('ended', function () {
				return _this2.show();
			});
	
			_this2.player.on('timeupdate', function () {
				if (!_this2.player.ended) {
					_this2.hide();
				}
			});
	
			_this2.progressButton.element.on('click', _this2.next.bind(_this2));
			_this2.cancelButton.on('click', _this2.cancel.bind(_this2));
	
			return _this2;
		}
	
		_createClass(NextComponent, [{
			key: 'createElement',
			value: function createElement() {
				var _options2 = this.options,
				    timeout = _options2.timeout,
				    title = _options2.title,
				    description = _options2.description,
				    poster = _options2.poster,
				    auto = _options2.auto,
				    time = _options2.time;
	
				var template = ('\n\t\t\t<div class="leplayer-next">\n                <div class="leplayer-next__head">\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043E</div>\n\t\t\t\t<div class="leplayer-next__box">\n\t\t\t\t\t<div class="leplayer-next__poster">\n\t\t\t\t\t\t<div class="leplayer-next__mini-title">' + title + '</div>\n\t\t\t\t\t\t<div class="leplayer-next__cancel" role="button">\u041E\u0442\u043C\u0435\u043D\u0430</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="leplayer-next__content">\n                        <div class="leplayer-next__title">' + title + '</div>\n                        <div class="leplayer-next__description">' + description + '</div>\n                        ' + (time ? '<div class="leplayer-next__time">' + secondsToTime(time) + '</div>' : '') + '\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t').trim();
	
				this.progressButton = new RadialBar(this.player, { timeout: timeout });
	
				this.element = (0, _jquery2.default)('<div />').html(template).contents();
	
				this.element.find('.leplayer-next__poster').append(this.progressButton.element);
	
				if (poster != null) {
					this.element.find('.leplayer-next__poster').css({
						'background-image': 'url(' + poster + ')'
					});
				}
	
				if (auto) {
					this.addClass('leplayer-next--auto');
				}
	
				return this.element;
			}
		}, {
			key: 'cancel',
			value: function cancel() {
				clearTimeout(this._timeout);
				this.removeClass('leplayer-next--auto');
			}
		}, {
			key: 'next',
			value: function next() {
				if (this.options.url != null) {
					window.location = this.options.url;
				} else if (this.options.fn && _jquery2.default.isFunction(this.options.fn)) {
					this.options.fn(this);
				}
			}
		}, {
			key: 'show',
			value: function show() {
				var _this3 = this;
	
				if (this.cancelled) return;
	
				this.element.show();
	
				if (this.options.auto) {
					this.progressButton.startAnimation();
					clearTimeout(this._timeout);
					this._timeout = setTimeout(function () {
						return _this3.next();
					}, this.options.timeout);
				}
			}
		}, {
			key: 'hide',
			value: function hide() {
				this.element.hide();
	
				if (this.options.auto) {
					this.progressButton.stopAnimation();
					this.progressButton.radial = 0;
					clearTimeout(this._timeout);
				}
			}
		}]);
	
		return NextComponent;
	}(Component);
	
	Player.plugin('next', function (pluginOptions) {
		this._nextComponent = new NextComponent(this, pluginOptions);
	
		this.innerElement.append(this._nextComponent.element);
	});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTA4ZmM5NjU4MDM1NDMzNWUzZTk/ZGJmMCoiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiJFwiPzU3YWEqIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wbHVnaW5zL2xlLXBsYXllci1uZXh0LmpzIl0sIm5hbWVzIjpbIlBsYXllciIsIndpbmRvdyIsImxlUGxheWVyIiwiQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwiSWNvbiIsInNlY29uZHNUb1RpbWUiLCJSYWRpYWxCYXIiLCJwbGF5ZXIiLCJvcHRpb25zIiwiJCIsImV4dGVuZCIsInN0cm9rZURhc2hhcnJheSIsInNpemUiLCJfY2lyY2xlRWxlbWVudCIsImVsZW1lbnQiLCJmaW5kIiwidGVtcGxhdGUiLCJ0cmltIiwiaHRtbCIsImNvbnRlbnRzIiwiYXBwZW5kIiwiaWNvbk5hbWUiLCJjYiIsInN0b3AiLCJhbmltYXRlIiwidGltZW91dCIsInZhbHVlIiwiX3JhZGlhbCIsImNzcyIsIk5leHRDb21wb25lbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXV0byIsImZuIiwiY2FuY2VsQnV0dG9uIiwib24iLCJoaWRlIiwic2hvdyIsImVuZGVkIiwicHJvZ3Jlc3NCdXR0b24iLCJuZXh0IiwiYmluZCIsImNhbmNlbCIsInBvc3RlciIsInRpbWUiLCJhZGRDbGFzcyIsImNsZWFyVGltZW91dCIsIl90aW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJ1cmwiLCJsb2NhdGlvbiIsImlzRnVuY3Rpb24iLCJjYW5jZWxsZWQiLCJzdGFydEFuaW1hdGlvbiIsInNldFRpbWVvdXQiLCJzdG9wQW5pbWF0aW9uIiwicmFkaWFsIiwicGx1Z2luIiwicGx1Z2luT3B0aW9ucyIsIl9uZXh0Q29tcG9uZW50IiwiaW5uZXJFbGVtZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFD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LGFBQU0sT0FBS2QsSUFBTCxFQUFOO0FBQUEsTUFBWCxFQUE4QixLQUFLaEMsT0FBTCxDQUFhaUIsT0FBM0MsQ0FBaEI7QUFDQTtBQUNEOzs7MEJBRU07QUFDTixTQUFLWCxPQUFMLENBQWFzQixJQUFiOztBQUVBLFFBQUcsS0FBSzVCLE9BQUwsQ0FBYXdCLElBQWhCLEVBQXNCO0FBQ3JCLFVBQUtPLGNBQUwsQ0FBb0JnQixhQUFwQjtBQUNBLFVBQUtoQixjQUFMLENBQW9CaUIsTUFBcEIsR0FBNkIsQ0FBN0I7QUFDQVYsa0JBQWEsS0FBS0MsUUFBbEI7QUFDQTtBQUNEOzs7O0dBekcwQjdDLFM7O0FBOEc1QkgsUUFBTzBELE1BQVAsQ0FBYyxNQUFkLEVBQXNCLFVBQVNDLGFBQVQsRUFBd0I7QUFDN0MsT0FBS0MsY0FBTCxHQUFzQixJQUFJOUIsYUFBSixDQUFrQixJQUFsQixFQUF3QjZCLGFBQXhCLENBQXRCOztBQUVBLE9BQUtFLFlBQUwsQ0FBa0J4QyxNQUFsQixDQUF5QixLQUFLdUMsY0FBTCxDQUFvQjdDLE9BQTdDO0FBRUEsRUFMRCxFIiwiZmlsZSI6ImxlLXBsYXllci1uZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTA4ZmM5NjU4MDM1NDMzNWUzZTkiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIkXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgUGxheWVyID0gd2luZG93LmxlUGxheWVyO1xuY29uc3QgQ29tcG9uZW50ID0gUGxheWVyLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5jb25zdCBJY29uID0gUGxheWVyLmdldENvbXBvbmVudCgnSWNvbicpO1xuY29uc3Qgc2Vjb25kc1RvVGltZSA9IFBsYXllci5zZWNvbmRzVG9UaW1lO1xuXG5jbGFzcyBSYWRpYWxCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0c3Ryb2tlRGFzaGFycmF5IDogMjkzLFxuXHRcdFx0c2l6ZSA6IDk4XG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl9jaXJjbGVFbGVtZW50ID0gdGhpcy5lbGVtZW50LmZpbmQoJ3N2ZyBjaXJjbGUnKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgeyBzdHJva2VEYXNoYXJyYXksIHNpemUgfSA9IHRoaXMub3B0aW9ucztcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19wbGF5IGxlcGxheWVyLXBsYXktYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIxMDAlXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgJHtzaXplfSAke3NpemV9XCIgY2xhc3M9XCJsZXBsYXllci1uZXh0X19zdmctc3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiJHstc2l6ZSAvIDJ9XCIgY3k9XCIke3NpemUgLyAyfVwiIGZpbGwtb3BhY2l0eT1cIjBcIiByPVwiNDYuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1kYXNoYXJyYXk9XCIke3N0cm9rZURhc2hhcnJheX1cIiBzdHJva2UtZGFzaG9mZnNldD1cIiR7LTEgKiBzdHJva2VEYXNoYXJyYXl9XCIgc3Ryb2tlLXdpZHRoPVwiNlwiIHRyYW5zZm9ybT1cInJvdGF0ZSgtOTApXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fYnV0dG9uIGxlcGxheWVyLXBsYXktYnV0dG9uX19idXR0b25cIj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgLnRyaW0oKVxuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKS5odG1sKHRlbXBsYXRlKS5jb250ZW50cygpO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuZmluZCgnLmxlcGxheWVyLW5leHRfX2J1dHRvbicpXG5cdFx0XHQuYXBwZW5kKG5ldyBJY29uKHRoaXMucGxheWVyLCB7IGljb25OYW1lIDogJ3BsYXknIH0pLmVsZW1lbnQpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblxuXHR9XG5cblx0c3RhcnRBbmltYXRpb24oY2IpIHtcblx0XHR0aGlzLl9jaXJjbGVFbGVtZW50XG5cdFx0XHQuc3RvcCgpXG5cdFx0XHQuYW5pbWF0ZSh7XG5cdFx0XHRcdCdzdHJva2UtZGFzaG9mZnNldCcgOiAtMiAqIHRoaXMub3B0aW9ucy5zdHJva2VEYXNoYXJyYXlcblx0XHRcdH0sIHRoaXMub3B0aW9ucy50aW1lb3V0LCBjYik7XG5cdH1cblxuXHRzdG9wQW5pbWF0aW9uKCkge1xuXHRcdHRoaXMuX2NpcmNsZUVsZW1lbnQuc3RvcCgpO1xuXHR9XG5cblx0c2V0IHJhZGlhbCh2YWx1ZSkge1xuXHRcdHRoaXMuX3JhZGlhbCA9IHZhbHVlO1xuXHRcdHRoaXMuX2NpcmNsZUVsZW1lbnQuY3NzKCdzdHJva2UtZGFzaG9mZnNldCcsIC0odmFsdWUgKyAxKSAqIHRoaXMub3B0aW9ucy5zdHJva2VEYXNoYXJyYXkpO1xuXHR9XG5cblx0Z2V0IHJhZGlhbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fcmFkaWFsO1xuXHR9XG59XG5cblxuXG5jbGFzcyBOZXh0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdHRpdGxlIDogJycsXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICcnLFxuXHRcdFx0dGltZW91dCA6IDEwMDAwLFxuXHRcdFx0YXV0byA6IGZhbHNlLFxuXHRcdFx0Zm4gOiAoKSA9PiB7fSxcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLmNhbmNlbEJ1dHRvbiA9IHRoaXMuZWxlbWVudC5maW5kKCcubGVwbGF5ZXItbmV4dF9fY2FuY2VsJyk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BsYXknLCAoKSA9PiB0aGlzLmhpZGUoKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2xvYWRzdGFydCcsICgpID0+IHRoaXMuaGlkZSgpKTtcblx0XHR0aGlzLnBsYXllci5vbignZW5kZWQnLCAoKSA9PiB0aGlzLnNob3coKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsICgpID0+IHtcblx0XHRcdGlmKCF0aGlzLnBsYXllci5lbmRlZCkge1xuXHRcdFx0XHR0aGlzLmhpZGUoKVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHR0aGlzLnByb2dyZXNzQnV0dG9uLmVsZW1lbnQub24oJ2NsaWNrJywgdGhpcy5uZXh0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuY2FuY2VsQnV0dG9uLm9uKCdjbGljaycsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IHsgdGltZW91dCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwb3N0ZXIsIGF1dG8sIHRpbWUgfSA9IHRoaXMub3B0aW9ucztcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX2hlYWRcIj7QodC70LXQtNGD0Y7RidC10LUg0LLQuNC00LXQvjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fYm94XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX3Bvc3RlclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX21pbmktdGl0bGVcIj4ke3RpdGxlfTwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX2NhbmNlbFwiIHJvbGU9XCJidXR0b25cIj7QntGC0LzQtdC90LA8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX3RpdGxlXCI+JHt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19kZXNjcmlwdGlvblwiPiR7ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RpbWUgPyBgPGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX3RpbWVcIj4ke3NlY29uZHNUb1RpbWUodGltZSl9PC9kaXY+YCA6ICcnfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0YC50cmltKCk7XG5cblx0XHR0aGlzLnByb2dyZXNzQnV0dG9uID0gbmV3IFJhZGlhbEJhcih0aGlzLnBsYXllciwgeyB0aW1lb3V0IH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpLmh0bWwodGVtcGxhdGUpLmNvbnRlbnRzKCk7XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5maW5kKCcubGVwbGF5ZXItbmV4dF9fcG9zdGVyJylcblx0XHRcdC5hcHBlbmQodGhpcy5wcm9ncmVzc0J1dHRvbi5lbGVtZW50KTtcblxuXHRcdGlmKHBvc3RlciAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdFx0LmZpbmQoJy5sZXBsYXllci1uZXh0X19wb3N0ZXInKVxuXHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHQnYmFja2dyb3VuZC1pbWFnZScgOiBgdXJsKCR7cG9zdGVyfSlgXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmKGF1dG8pIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLW5leHQtLWF1dG8nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0Y2FuY2VsKCkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcblx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci1uZXh0LS1hdXRvJyk7XG5cdH1cblxuXHRuZXh0KCkge1xuXHRcdGlmKHRoaXMub3B0aW9ucy51cmwgIT0gbnVsbCkge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uID0gdGhpcy5vcHRpb25zLnVybDtcblx0XHR9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5mbiAmJiAkLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLmZuKSkge1xuXHRcdFx0dGhpcy5vcHRpb25zLmZuKHRoaXMpXG5cdFx0fVxuXHR9XG5cblx0c2hvdygpIHtcblx0XHRpZih0aGlzLmNhbmNlbGxlZCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5lbGVtZW50LnNob3coKTtcblxuXHRcdGlmKHRoaXMub3B0aW9ucy5hdXRvKSB7XG5cdFx0XHR0aGlzLnByb2dyZXNzQnV0dG9uLnN0YXJ0QW5pbWF0aW9uKCk7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG5cdFx0XHR0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLm5leHQoKSwgdGhpcy5vcHRpb25zLnRpbWVvdXQpO1xuXHRcdH1cblx0fVxuXG5cdGhpZGUoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmhpZGUoKTtcblxuXHRcdGlmKHRoaXMub3B0aW9ucy5hdXRvKSB7XG5cdFx0XHR0aGlzLnByb2dyZXNzQnV0dG9uLnN0b3BBbmltYXRpb24oKTtcblx0XHRcdHRoaXMucHJvZ3Jlc3NCdXR0b24ucmFkaWFsID0gMDtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcblx0XHR9XG5cdH1cblxufVxuXG5cblBsYXllci5wbHVnaW4oJ25leHQnLCBmdW5jdGlvbihwbHVnaW5PcHRpb25zKSB7XG5cdHRoaXMuX25leHRDb21wb25lbnQgPSBuZXcgTmV4dENvbXBvbmVudCh0aGlzLCBwbHVnaW5PcHRpb25zKVxuXG5cdHRoaXMuaW5uZXJFbGVtZW50LmFwcGVuZCh0aGlzLl9uZXh0Q29tcG9uZW50LmVsZW1lbnQpO1xuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wbHVnaW5zL2xlLXBsYXllci1uZXh0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==