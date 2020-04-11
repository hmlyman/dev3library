"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "test";
exports["default"] = _default;

function first(array, n) {
  if (!Array.isArray) {
    return "This is not an array";
  }

  if (typeof n !== "undefined") {
    return arr[0];
  }

  return array[0];
}

function last(array, n) {
  if (!Array.isArray) {
    return "This is not an array";
  }

  if (typeof n !== "undefined") {
    return array.length - 1;
  }

  return array.length - 1;
} //function without(array, value) {
//let value
//if(!Array.isArray) {
//return "This is not an array";
//}
//if (value = n )
//}