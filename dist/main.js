/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _underdash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underdash */ \"./src/underdash.js\");\n\r\n\r\nconst app = document.querySelector(\"#app\");\r\n\r\nconst firstItems = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].first([1, 2, 3, 4], -1);\r\n\r\napp.innerHTML = JSON.stringify(firstItems);\r\n\r\n//import { myMath } from \"./myMath\";\r\n//import { dice } from \"./dice\";\r\n\r\n//let x = 2;\r\n//let y = 3;\r\n\r\n//let addfunc = myMath.add(x, y);\r\n\r\n//console.log(\"add: \", addfunc);\r\n\r\n//let subfunc = myMath.subtract(x, y);\r\n\r\n//console.log(\"sub: \", subfunc);\r\n\r\n//let result = dice.rollDie(10);\r\n//console.log(result);\r\n\r\n//let diceTotal = dice.rollDice(3, 8);\r\n//console.log(diceTotal);\r\n\r\n//let myStats = dice.rollStats();\r\n//console.log(myStats);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwiLi91bmRlcmRhc2hcIjtcclxuXHJcbmNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwXCIpO1xyXG5cclxuY29uc3QgZmlyc3RJdGVtcyA9IF8uZmlyc3QoWzEsIDIsIDMsIDRdLCAtMSk7XHJcblxyXG5hcHAuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoZmlyc3RJdGVtcyk7XHJcblxyXG4vL2ltcG9ydCB7IG15TWF0aCB9IGZyb20gXCIuL215TWF0aFwiO1xyXG4vL2ltcG9ydCB7IGRpY2UgfSBmcm9tIFwiLi9kaWNlXCI7XHJcblxyXG4vL2xldCB4ID0gMjtcclxuLy9sZXQgeSA9IDM7XHJcblxyXG4vL2xldCBhZGRmdW5jID0gbXlNYXRoLmFkZCh4LCB5KTtcclxuXHJcbi8vY29uc29sZS5sb2coXCJhZGQ6IFwiLCBhZGRmdW5jKTtcclxuXHJcbi8vbGV0IHN1YmZ1bmMgPSBteU1hdGguc3VidHJhY3QoeCwgeSk7XHJcblxyXG4vL2NvbnNvbGUubG9nKFwic3ViOiBcIiwgc3ViZnVuYyk7XHJcblxyXG4vL2xldCByZXN1bHQgPSBkaWNlLnJvbGxEaWUoMTApO1xyXG4vL2NvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4vL2xldCBkaWNlVG90YWwgPSBkaWNlLnJvbGxEaWNlKDMsIDgpO1xyXG4vL2NvbnNvbGUubG9nKGRpY2VUb3RhbCk7XHJcblxyXG4vL2xldCBteVN0YXRzID0gZGljZS5yb2xsU3RhdHMoKTtcclxuLy9jb25zb2xlLmxvZyhteVN0YXRzKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/underdash.js":
/*!**************************!*\
  !*** ./src/underdash.js ***!
  \**************************/
/*! exports provided: default, first, last, difference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"first\", function() { return first; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"last\", function() { return last; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return difference; });\n/* harmony default export */ __webpack_exports__[\"default\"] = ((() => {\r\n  return {\r\n    first(array, n) {\r\n      if (!Array.isArray(array)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array\r\n          )} is not an array. The first function only works on arrays.`\r\n        );\r\n      }\r\n      if (typeof n === \"undefined\") {\r\n        return array[0];\r\n      }\r\n      if (!(n >= 1)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            n\r\n          )} is not a valid number of items. Pleasu use a number > 0`\r\n        );\r\n      }\r\n      return array.slice(0, n);\r\n    },\r\n  };\r\n})());\r\n\r\nlet first = function (array, n) {\r\n  console.log(\"first\");\r\n  let count = 0;\r\n\r\n  if (!Array.isArray) {\r\n    return \"This is not an array\";\r\n  }\r\n  if (typeof n !== \"undefined\") {\r\n    return arr[0];\r\n  }\r\n  return array[0];\r\n};\r\n\r\nlet last = function (array, n) {\r\n  if (!Array.isArray) {\r\n    return \"This is not an array\";\r\n  }\r\n  if (typeof n !== \"undefined\") {\r\n    return array.length - 1;\r\n  }\r\n  return array.length - 1;\r\n};\r\n\r\nlet difference = function () {\r\n  if (!Array.isArray) {\r\n    throw error;\r\n  }\r\n};\r\n\r\n//function without(array, value) {\r\n//let value\r\n//if(!Array.isArray) {\r\n//return \"This is not an array\";\r\n//}\r\n//if (value = n )\r\n//}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdW5kZXJkYXNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3VuZGVyZGFzaC5qcz9hMDM0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZpcnN0KGFycmF5LCBuKSB7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgJHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAgYXJyYXlcclxuICAgICAgICAgICl9IGlzIG5vdCBhbiBhcnJheS4gVGhlIGZpcnN0IGZ1bmN0aW9uIG9ubHkgd29ya3Mgb24gYXJyYXlzLmBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiBhcnJheVswXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIShuID49IDEpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIG5cclxuICAgICAgICAgICl9IGlzIG5vdCBhIHZhbGlkIG51bWJlciBvZiBpdGVtcy4gUGxlYXN1IHVzZSBhIG51bWJlciA+IDBgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXJyYXkuc2xpY2UoMCwgbik7XHJcbiAgICB9LFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgbGV0IGZpcnN0ID0gZnVuY3Rpb24gKGFycmF5LCBuKSB7XHJcbiAgY29uc29sZS5sb2coXCJmaXJzdFwiKTtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBpZiAoIUFycmF5LmlzQXJyYXkpIHtcclxuICAgIHJldHVybiBcIlRoaXMgaXMgbm90IGFuIGFycmF5XCI7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgbiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuIGFyclswXTtcclxuICB9XHJcbiAgcmV0dXJuIGFycmF5WzBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBsYXN0ID0gZnVuY3Rpb24gKGFycmF5LCBuKSB7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KSB7XHJcbiAgICByZXR1cm4gXCJUaGlzIGlzIG5vdCBhbiBhcnJheVwiO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIG4gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHJldHVybiBhcnJheS5sZW5ndGggLSAxO1xyXG4gIH1cclxuICByZXR1cm4gYXJyYXkubGVuZ3RoIC0gMTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgZGlmZmVyZW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkpIHtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbi8vZnVuY3Rpb24gd2l0aG91dChhcnJheSwgdmFsdWUpIHtcclxuLy9sZXQgdmFsdWVcclxuLy9pZighQXJyYXkuaXNBcnJheSkge1xyXG4vL3JldHVybiBcIlRoaXMgaXMgbm90IGFuIGFycmF5XCI7XHJcbi8vfVxyXG4vL2lmICh2YWx1ZSA9IG4gKVxyXG4vL31cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/underdash.js\n");

/***/ })

/******/ });