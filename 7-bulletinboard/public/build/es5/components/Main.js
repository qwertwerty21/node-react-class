"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Communities = _interopRequire(require("../components/Communities"));

var Register = _interopRequire(require("../components/layout/Register"));

var Main = (function (Component) {
	function Main() {
		_classCallCheck(this, Main);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(Main, Component);

	_prototypeProperties(Main, null, {
		componentDidMount: {
			value: function componentDidMount() {
				console.log("MAIN: " + this.props.page);
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var content = null;
				var page = this.props.page;
				if (page == "home") content = React.createElement(Communities, null);

				if (page == "register") content = React.createElement(Register, null);


				return React.createElement(
					"div",
					null,
					content
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Main;
})(Component);

module.exports = Main;