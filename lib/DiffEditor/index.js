"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _DiffEditor = _interopRequireDefault(require("./DiffEditor"));

var _default = (0, _react.memo)(_DiffEditor["default"]);

exports["default"] = _default;