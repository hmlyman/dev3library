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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _underdash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underdash */ \"./src/underdash.js\");\n\r\n\r\nconst first = document.querySelector(\"#first\");\r\nconst last = document.querySelector(\"#last\");\r\nconst diff = document.querySelector(\"#diff\");\r\nconst intersect = document.querySelector(\"#intersect\");\r\n\r\nconst firstItems = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].first([1, 2, 3, 4], 2);\r\nconst lastItems = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].last([1, 2, 3, 4], 2);\r\nconst difference = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difference([\"bob\", \"dude\", \"loop\"], [\"dude\", \"loop\"]);\r\nconst intersection = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].intersection([\"bob\", \"dude\", \"loop\"], [\"dude\", \"loop\"]);\r\n\r\nfirst.innerHTML = JSON.stringify(firstItems);\r\nlast.innerHTML = JSON.stringify(lastItems);\r\ndiff.innerHTML = JSON.stringify(difference);\r\nintersect.innerHTML = JSON.stringify(intersection);\r\n\r\n//import { myMath } from \"./myMath\";\r\n//import { dice } from \"./dice\";\r\n\r\n//let x = 2;\r\n//let y = 3;\r\n\r\n//let addfunc = myMath.add(x, y);\r\n\r\n//console.log(\"add: \", addfunc);\r\n\r\n//let subfunc = myMath.subtract(x, y);\r\n\r\n//console.log(\"sub: \", subfunc);\r\n\r\n//let result = dice.rollDie(10);\r\n//console.log(result);\r\n\r\n//let diceTotal = dice.rollDice(3, 8);\r\n//console.log(diceTotal);\r\n\r\n//let myStats = dice.rollStats();\r\n//console.log(myStats);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwiLi91bmRlcmRhc2hcIjtcclxuXHJcbmNvbnN0IGZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaXJzdFwiKTtcclxuY29uc3QgbGFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGFzdFwiKTtcclxuY29uc3QgZGlmZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlmZlwiKTtcclxuY29uc3QgaW50ZXJzZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnRlcnNlY3RcIik7XHJcblxyXG5jb25zdCBmaXJzdEl0ZW1zID0gXy5maXJzdChbMSwgMiwgMywgNF0sIDIpO1xyXG5jb25zdCBsYXN0SXRlbXMgPSBfLmxhc3QoWzEsIDIsIDMsIDRdLCAyKTtcclxuY29uc3QgZGlmZmVyZW5jZSA9IF8uZGlmZmVyZW5jZShbXCJib2JcIiwgXCJkdWRlXCIsIFwibG9vcFwiXSwgW1wiZHVkZVwiLCBcImxvb3BcIl0pO1xyXG5jb25zdCBpbnRlcnNlY3Rpb24gPSBfLmludGVyc2VjdGlvbihbXCJib2JcIiwgXCJkdWRlXCIsIFwibG9vcFwiXSwgW1wiZHVkZVwiLCBcImxvb3BcIl0pO1xyXG5cclxuZmlyc3QuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoZmlyc3RJdGVtcyk7XHJcbmxhc3QuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkobGFzdEl0ZW1zKTtcclxuZGlmZi5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShkaWZmZXJlbmNlKTtcclxuaW50ZXJzZWN0LmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGludGVyc2VjdGlvbik7XHJcblxyXG4vL2ltcG9ydCB7IG15TWF0aCB9IGZyb20gXCIuL215TWF0aFwiO1xyXG4vL2ltcG9ydCB7IGRpY2UgfSBmcm9tIFwiLi9kaWNlXCI7XHJcblxyXG4vL2xldCB4ID0gMjtcclxuLy9sZXQgeSA9IDM7XHJcblxyXG4vL2xldCBhZGRmdW5jID0gbXlNYXRoLmFkZCh4LCB5KTtcclxuXHJcbi8vY29uc29sZS5sb2coXCJhZGQ6IFwiLCBhZGRmdW5jKTtcclxuXHJcbi8vbGV0IHN1YmZ1bmMgPSBteU1hdGguc3VidHJhY3QoeCwgeSk7XHJcblxyXG4vL2NvbnNvbGUubG9nKFwic3ViOiBcIiwgc3ViZnVuYyk7XHJcblxyXG4vL2xldCByZXN1bHQgPSBkaWNlLnJvbGxEaWUoMTApO1xyXG4vL2NvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4vL2xldCBkaWNlVG90YWwgPSBkaWNlLnJvbGxEaWNlKDMsIDgpO1xyXG4vL2NvbnNvbGUubG9nKGRpY2VUb3RhbCk7XHJcblxyXG4vL2xldCBteVN0YXRzID0gZGljZS5yb2xsU3RhdHMoKTtcclxuLy9jb25zb2xlLmxvZyhteVN0YXRzKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/underdash.js":
/*!**************************!*\
  !*** ./src/underdash.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((() => {\r\n  return {\r\n    first(array, n) {\r\n      if (!Array.isArray(array)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array\r\n          )} is not an array. The first function only works on arrays.`\r\n        );\r\n      }\r\n      if (typeof n === \"undefined\") {\r\n        return array[0];\r\n      }\r\n      if (!(n >= 1)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            n\r\n          )} is not a valid number of items. Pleasu use a number > 0`\r\n        );\r\n      }\r\n      return array.slice(0, n);\r\n    },\r\n    last(array, n) {\r\n      if (!Array.isArray(array)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array\r\n          )} is not an array. The first function only works on arrays.`\r\n        );\r\n      }\r\n      if (typeof n === \"undefined\") {\r\n        return array[array.length - 1];\r\n      }\r\n      if (!(n >= 1)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            n\r\n          )} is not a valid number of items. Pleasu use a number > 0`\r\n        );\r\n      }\r\n      return array.slice(Math.max(array.length - n, 0));\r\n    },\r\n    difference(array1, array2) {\r\n      if (!Array.isArray(array1) || !Array.isArray(array2)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array1\r\n          )} is not an array. The first function only works on arrays.`\r\n        );\r\n      }\r\n      if (typeof n === \"undefined\") {\r\n        let a = [];\r\n        let diff = [];\r\n        for (let i = 0; i < array1.length; i++) {\r\n          a[array1[i]] = true;\r\n        }\r\n        for (let i = 0; i < array2.length; i++) {\r\n          if (a[array2[i]]) {\r\n            delete a[array2[i]];\r\n          } else {\r\n            a[array2[i]] = true;\r\n          }\r\n        }\r\n        for (let k in a) {\r\n          diff.push(k);\r\n        }\r\n        return diff;\r\n      }\r\n    },\r\n    intersection(array1, array2) {\r\n      if (!Array.isArray(array1) || !Array.isArray(array2)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array1\r\n          )} is not an array. The first function only works on arrays.`\r\n        );\r\n      }\r\n      if (typeof n === \"undefined\") {\r\n        var setA = new Set(array1);\r\n        var setB = new Set(array2);\r\n        var intersection = new Set([...setA].filter((x) => setB.has(x)));\r\n        return Array.from(intersection);\r\n      }\r\n    },\r\n  };\r\n})());\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdW5kZXJkYXNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3VuZGVyZGFzaC5qcz9hMDM0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZpcnN0KGFycmF5LCBuKSB7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgJHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAgYXJyYXlcclxuICAgICAgICAgICl9IGlzIG5vdCBhbiBhcnJheS4gVGhlIGZpcnN0IGZ1bmN0aW9uIG9ubHkgd29ya3Mgb24gYXJyYXlzLmBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiBhcnJheVswXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIShuID49IDEpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIG5cclxuICAgICAgICAgICl9IGlzIG5vdCBhIHZhbGlkIG51bWJlciBvZiBpdGVtcy4gUGxlYXN1IHVzZSBhIG51bWJlciA+IDBgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXJyYXkuc2xpY2UoMCwgbik7XHJcbiAgICB9LFxyXG4gICAgbGFzdChhcnJheSwgbikge1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIGFycmF5XHJcbiAgICAgICAgICApfSBpcyBub3QgYW4gYXJyYXkuIFRoZSBmaXJzdCBmdW5jdGlvbiBvbmx5IHdvcmtzIG9uIGFycmF5cy5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIG4gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCEobiA+PSAxKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICBuXHJcbiAgICAgICAgICApfSBpcyBub3QgYSB2YWxpZCBudW1iZXIgb2YgaXRlbXMuIFBsZWFzdSB1c2UgYSBudW1iZXIgPiAwYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFycmF5LnNsaWNlKE1hdGgubWF4KGFycmF5Lmxlbmd0aCAtIG4sIDApKTtcclxuICAgIH0sXHJcbiAgICBkaWZmZXJlbmNlKGFycmF5MSwgYXJyYXkyKSB7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheTEpIHx8ICFBcnJheS5pc0FycmF5KGFycmF5MikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgJHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAgYXJyYXkxXHJcbiAgICAgICAgICApfSBpcyBub3QgYW4gYXJyYXkuIFRoZSBmaXJzdCBmdW5jdGlvbiBvbmx5IHdvcmtzIG9uIGFycmF5cy5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIG4gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBsZXQgYSA9IFtdO1xyXG4gICAgICAgIGxldCBkaWZmID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheTEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGFbYXJyYXkxW2ldXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoYVthcnJheTJbaV1dKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBhW2FycmF5MltpXV07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhW2FycmF5MltpXV0gPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBrIGluIGEpIHtcclxuICAgICAgICAgIGRpZmYucHVzaChrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpZmY7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbnRlcnNlY3Rpb24oYXJyYXkxLCBhcnJheTIpIHtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5MSkgfHwgIUFycmF5LmlzQXJyYXkoYXJyYXkyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICBhcnJheTFcclxuICAgICAgICAgICl9IGlzIG5vdCBhbiBhcnJheS4gVGhlIGZpcnN0IGZ1bmN0aW9uIG9ubHkgd29ya3Mgb24gYXJyYXlzLmBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHZhciBzZXRBID0gbmV3IFNldChhcnJheTEpO1xyXG4gICAgICAgIHZhciBzZXRCID0gbmV3IFNldChhcnJheTIpO1xyXG4gICAgICAgIHZhciBpbnRlcnNlY3Rpb24gPSBuZXcgU2V0KFsuLi5zZXRBXS5maWx0ZXIoKHgpID0+IHNldEIuaGFzKHgpKSk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oaW50ZXJzZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59KSgpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/underdash.js\n");

/***/ })

/******/ });