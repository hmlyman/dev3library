"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myMath = exports.hi = void 0;
var hi = "hello from myMath";
exports.hi = hi;

var myMath = function () {
  //private variables and functions
  return {
    add: function add(num1, num2) {
      return num1 + num2;
    },
    subtract: function subtract(num1, num2) {
      return num1 - num2;
    }
  };
}();

exports.myMath = myMath;