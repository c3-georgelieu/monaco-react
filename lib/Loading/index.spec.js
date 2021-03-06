"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

describe('<Loading />', function () {
  it('should check render with snapshot', function () {
    var component = (0, _react2.render)(_react["default"].createElement(_["default"], null));
    expect(component).toMatchSnapshot();
  });
  it('should check is it wrapped with <div />', function () {
    var component = (0, _react2.render)(_react["default"].createElement(_["default"], null));
    var container = component.container;
    expect(container.firstChild.tagName).toBe('DIV');
  });
  it('should check content', function () {
    var content = 'Loading...';
    var component = (0, _react2.render)(_react["default"].createElement(_["default"], {
      content: content
    }));
    var container = component.container;
    expect(container.textContent).toBe(content);
  });
});