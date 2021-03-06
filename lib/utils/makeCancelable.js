"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = 'operation is manually canceled';

var makeCancelable = function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](function (error) {
      return reject(error);
    });
  });
  return wrappedPromise.cancel = function (_) {
    return hasCanceled_ = true;
  }, wrappedPromise;
};

var _default = makeCancelable;
exports["default"] = _default;