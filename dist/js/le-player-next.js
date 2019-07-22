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

	module.exports = __webpack_require__(73);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = $;

/***/ }),

/***/ 73:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmFkMjdlMmM1YmJkMDA5YmM5NjA/NzJmYyoqIiwid2VicGFjazovLy9leHRlcm5hbCBcIiRcIj81N2FhKioiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLW5leHQuanM/YzBmYiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJ3aW5kb3ciLCJsZVBsYXllciIsIkNvbXBvbmVudCIsImdldENvbXBvbmVudCIsIkljb24iLCJzZWNvbmRzVG9UaW1lIiwiUmFkaWFsQmFyIiwicGxheWVyIiwib3B0aW9ucyIsImV4dGVuZCIsInN0cm9rZURhc2hhcnJheSIsInNpemUiLCJfY2lyY2xlRWxlbWVudCIsImVsZW1lbnQiLCJmaW5kIiwidGVtcGxhdGUiLCJ0cmltIiwiaHRtbCIsImNvbnRlbnRzIiwiYXBwZW5kIiwiaWNvbk5hbWUiLCJjYiIsInN0b3AiLCJhbmltYXRlIiwidGltZW91dCIsInZhbHVlIiwiX3JhZGlhbCIsImNzcyIsIk5leHRDb21wb25lbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXV0byIsImZuIiwiY2FuY2VsQnV0dG9uIiwib24iLCJoaWRlIiwic2hvdyIsImVuZGVkIiwicHJvZ3Jlc3NCdXR0b24iLCJuZXh0IiwiYmluZCIsImNhbmNlbCIsInBvc3RlciIsInRpbWUiLCJhZGRDbGFzcyIsImNsZWFyVGltZW91dCIsIl90aW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJ1cmwiLCJsb2NhdGlvbiIsImlzRnVuY3Rpb24iLCJjYW5jZWxsZWQiLCJzdGFydEFuaW1hdGlvbiIsInNldFRpbWVvdXQiLCJzdG9wQW5pbWF0aW9uIiwicmFkaWFsIiwicGx1Z2luIiwicGx1Z2luT3B0aW9ucyIsIl9uZXh0Q29tcG9uZW50IiwiaW5uZXJFbGVtZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7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QU0sT0FBS2QsSUFBTCxFQUFOO0FBQUEsTUFBWCxFQUE4QixLQUFLL0IsT0FBTCxDQUFhZ0IsT0FBM0MsQ0FBaEI7QUFDQTtBQUNEOzs7MEJBRU07QUFDTixTQUFLWCxPQUFMLENBQWFzQixJQUFiOztBQUVBLFFBQUcsS0FBSzNCLE9BQUwsQ0FBYXVCLElBQWhCLEVBQXNCO0FBQ3JCLFVBQUtPLGNBQUwsQ0FBb0JnQixhQUFwQjtBQUNBLFVBQUtoQixjQUFMLENBQW9CaUIsTUFBcEIsR0FBNkIsQ0FBN0I7QUFDQVYsa0JBQWEsS0FBS0MsUUFBbEI7QUFDQTtBQUNEOzs7O0dBekcwQjVDLFM7O0FBOEc1QkgsUUFBT3lELE1BQVAsQ0FBYyxNQUFkLEVBQXNCLFVBQVNDLGFBQVQsRUFBd0I7QUFDN0MsT0FBS0MsY0FBTCxHQUFzQixJQUFJOUIsYUFBSixDQUFrQixJQUFsQixFQUF3QjZCLGFBQXhCLENBQXRCOztBQUVBLE9BQUtFLFlBQUwsQ0FBa0J4QyxNQUFsQixDQUF5QixLQUFLdUMsY0FBTCxDQUFvQjdDLE9BQTdDO0FBRUEsRUFMRCxFIiwiZmlsZSI6ImxlLXBsYXllci1uZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmFkMjdlMmM1YmJkMDA5YmM5NjAiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIkXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBQbGF5ZXIgPSB3aW5kb3cubGVQbGF5ZXI7XG5jb25zdCBDb21wb25lbnQgPSBQbGF5ZXIuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcbmNvbnN0IEljb24gPSBQbGF5ZXIuZ2V0Q29tcG9uZW50KCdJY29uJyk7XG5jb25zdCBzZWNvbmRzVG9UaW1lID0gUGxheWVyLnNlY29uZHNUb1RpbWU7XG5cbmNsYXNzIFJhZGlhbEJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRzdHJva2VEYXNoYXJyYXkgOiAyOTMsXG5cdFx0XHRzaXplIDogOThcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX2NpcmNsZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuZmluZCgnc3ZnIGNpcmNsZScpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCB7IHN0cm9rZURhc2hhcnJheSwgc2l6ZSB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX3BsYXkgbGVwbGF5ZXItcGxheS1idXR0b25cIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjEwMCVcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAke3NpemV9ICR7c2l6ZX1cIiBjbGFzcz1cImxlcGxheWVyLW5leHRfX3N2Zy1zcGlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIkey1zaXplIC8gMn1cIiBjeT1cIiR7c2l6ZSAvIDJ9XCIgZmlsbC1vcGFjaXR5PVwiMFwiIHI9XCI0Ni41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWRhc2hhcnJheT1cIiR7c3Ryb2tlRGFzaGFycmF5fVwiIHN0cm9rZS1kYXNob2Zmc2V0PVwiJHstMSAqIHN0cm9rZURhc2hhcnJheX1cIiBzdHJva2Utd2lkdGg9XCI2XCIgdHJhbnNmb3JtPVwicm90YXRlKC05MClcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19idXR0b24gbGVwbGF5ZXItcGxheS1idXR0b25fX2J1dHRvblwiPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGAudHJpbSgpXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpLmh0bWwodGVtcGxhdGUpLmNvbnRlbnRzKCk7XG5cblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5maW5kKCcubGVwbGF5ZXItbmV4dF9fYnV0dG9uJylcblx0XHRcdC5hcHBlbmQobmV3IEljb24odGhpcy5wbGF5ZXIsIHsgaWNvbk5hbWUgOiAncGxheScgfSkuZWxlbWVudCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXG5cdH1cblxuXHRzdGFydEFuaW1hdGlvbihjYikge1xuXHRcdHRoaXMuX2NpcmNsZUVsZW1lbnRcblx0XHRcdC5zdG9wKClcblx0XHRcdC5hbmltYXRlKHtcblx0XHRcdFx0J3N0cm9rZS1kYXNob2Zmc2V0JyA6IC0yICogdGhpcy5vcHRpb25zLnN0cm9rZURhc2hhcnJheVxuXHRcdFx0fSwgdGhpcy5vcHRpb25zLnRpbWVvdXQsIGNiKTtcblx0fVxuXG5cdHN0b3BBbmltYXRpb24oKSB7XG5cdFx0dGhpcy5fY2lyY2xlRWxlbWVudC5zdG9wKCk7XG5cdH1cblxuXHRzZXQgcmFkaWFsKHZhbHVlKSB7XG5cdFx0dGhpcy5fcmFkaWFsID0gdmFsdWU7XG5cdFx0dGhpcy5fY2lyY2xlRWxlbWVudC5jc3MoJ3N0cm9rZS1kYXNob2Zmc2V0JywgLSh2YWx1ZSArIDEpICogdGhpcy5vcHRpb25zLnN0cm9rZURhc2hhcnJheSk7XG5cdH1cblxuXHRnZXQgcmFkaWFsKCkge1xuXHRcdHJldHVybiB0aGlzLl9yYWRpYWw7XG5cdH1cbn1cblxuXG5cbmNsYXNzIE5leHRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0dGl0bGUgOiAnJyxcblx0XHRcdGRlc2NyaXB0aW9uIDogJycsXG5cdFx0XHR0aW1lb3V0IDogMTAwMDAsXG5cdFx0XHRhdXRvIDogZmFsc2UsXG5cdFx0XHRmbiA6ICgpID0+IHt9LFxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMuY2FuY2VsQnV0dG9uID0gdGhpcy5lbGVtZW50LmZpbmQoJy5sZXBsYXllci1uZXh0X19jYW5jZWwnKTtcblx0XHR0aGlzLnBsYXllci5vbigncGxheScsICgpID0+IHRoaXMuaGlkZSgpKTtcblx0XHR0aGlzLnBsYXllci5vbignbG9hZHN0YXJ0JywgKCkgPT4gdGhpcy5oaWRlKCkpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdlbmRlZCcsICgpID0+IHRoaXMuc2hvdygpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuXHRcdFx0aWYoIXRoaXMucGxheWVyLmVuZGVkKSB7XG5cdFx0XHRcdHRoaXMuaGlkZSgpXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHRoaXMucHJvZ3Jlc3NCdXR0b24uZWxlbWVudC5vbignY2xpY2snLCB0aGlzLm5leHQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5jYW5jZWxCdXR0b24ub24oJ2NsaWNrJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG5cblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgeyB0aW1lb3V0LCB0aXRsZSwgZGVzY3JpcHRpb24sIHBvc3RlciwgYXV0bywgdGltZSB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9faGVhZFwiPtCh0LvQtdC00YPRjtGJ0LXQtSDQstC40LTQtdC+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19ib3hcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fcG9zdGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fbWluaS10aXRsZVwiPiR7dGl0bGV9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fY2FuY2VsXCIgcm9sZT1cImJ1dHRvblwiPtCe0YLQvNC10L3QsDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1uZXh0X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fdGl0bGVcIj4ke3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlcGxheWVyLW5leHRfX2Rlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGltZSA/IGA8ZGl2IGNsYXNzPVwibGVwbGF5ZXItbmV4dF9fdGltZVwiPiR7c2Vjb25kc1RvVGltZSh0aW1lKX08L2Rpdj5gIDogJyd9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRgLnRyaW0oKTtcblxuXHRcdHRoaXMucHJvZ3Jlc3NCdXR0b24gPSBuZXcgUmFkaWFsQmFyKHRoaXMucGxheWVyLCB7IHRpbWVvdXQgfSk7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+JykuaHRtbCh0ZW1wbGF0ZSkuY29udGVudHMoKTtcblxuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0LmZpbmQoJy5sZXBsYXllci1uZXh0X19wb3N0ZXInKVxuXHRcdFx0LmFwcGVuZCh0aGlzLnByb2dyZXNzQnV0dG9uLmVsZW1lbnQpO1xuXG5cdFx0aWYocG9zdGVyICE9IG51bGwpIHtcblx0XHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0XHQuZmluZCgnLmxlcGxheWVyLW5leHRfX3Bvc3RlcicpXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWltYWdlJyA6IGB1cmwoJHtwb3N0ZXJ9KWBcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYoYXV0bykge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItbmV4dC0tYXV0bycpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRjYW5jZWwoKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLW5leHQtLWF1dG8nKTtcblx0fVxuXG5cdG5leHQoKSB7XG5cdFx0aWYodGhpcy5vcHRpb25zLnVybCAhPSBudWxsKSB7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24gPSB0aGlzLm9wdGlvbnMudXJsO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmZuICYmICQuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMuZm4pKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuZm4odGhpcylcblx0XHR9XG5cdH1cblxuXHRzaG93KCkge1xuXHRcdGlmKHRoaXMuY2FuY2VsbGVkKSByZXR1cm47XG5cblx0XHR0aGlzLmVsZW1lbnQuc2hvdygpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLmF1dG8pIHtcblx0XHRcdHRoaXMucHJvZ3Jlc3NCdXR0b24uc3RhcnRBbmltYXRpb24oKTtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcblx0XHRcdHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmV4dCgpLCB0aGlzLm9wdGlvbnMudGltZW91dCk7XG5cdFx0fVxuXHR9XG5cblx0aGlkZSgpIHtcblx0XHR0aGlzLmVsZW1lbnQuaGlkZSgpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLmF1dG8pIHtcblx0XHRcdHRoaXMucHJvZ3Jlc3NCdXR0b24uc3RvcEFuaW1hdGlvbigpO1xuXHRcdFx0dGhpcy5wcm9ncmVzc0J1dHRvbi5yYWRpYWwgPSAwO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuXHRcdH1cblx0fVxuXG59XG5cblxuUGxheWVyLnBsdWdpbignbmV4dCcsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblx0dGhpcy5fbmV4dENvbXBvbmVudCA9IG5ldyBOZXh0Q29tcG9uZW50KHRoaXMsIHBsdWdpbk9wdGlvbnMpXG5cblx0dGhpcy5pbm5lckVsZW1lbnQuYXBwZW5kKHRoaXMuX25leHRDb21wb25lbnQuZWxlbWVudCk7XG5cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLW5leHQuanMiXSwic291cmNlUm9vdCI6IiJ9