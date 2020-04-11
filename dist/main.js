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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _underdash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underdash */ \"./src/underdash.js\");\n\r\n\r\nconst app = document.querySelector(\"#app\");\r\napp.innerHTML = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].first;\r\n\r\n//import { myMath } from \"./myMath\";\r\n//import { dice } from \"./dice\";\r\n\r\n//let x = 2;\r\n//let y = 3;\r\n\r\n//let addfunc = myMath.add(x, y);\r\n\r\n//console.log(\"add: \", addfunc);\r\n\r\n//let subfunc = myMath.subtract(x, y);\r\n\r\n//console.log(\"sub: \", subfunc);\r\n\r\n//let result = dice.rollDie(10);\r\n//console.log(result);\r\n\r\n//let diceTotal = dice.rollDice(3, 8);\r\n//console.log(diceTotal);\r\n\r\n//let myStats = dice.rollStats();\r\n//console.log(myStats);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwiLi91bmRlcmRhc2hcIjtcclxuXHJcbmNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwXCIpO1xyXG5hcHAuaW5uZXJIVE1MID0gXy5maXJzdDtcclxuXHJcbi8vaW1wb3J0IHsgbXlNYXRoIH0gZnJvbSBcIi4vbXlNYXRoXCI7XHJcbi8vaW1wb3J0IHsgZGljZSB9IGZyb20gXCIuL2RpY2VcIjtcclxuXHJcbi8vbGV0IHggPSAyO1xyXG4vL2xldCB5ID0gMztcclxuXHJcbi8vbGV0IGFkZGZ1bmMgPSBteU1hdGguYWRkKHgsIHkpO1xyXG5cclxuLy9jb25zb2xlLmxvZyhcImFkZDogXCIsIGFkZGZ1bmMpO1xyXG5cclxuLy9sZXQgc3ViZnVuYyA9IG15TWF0aC5zdWJ0cmFjdCh4LCB5KTtcclxuXHJcbi8vY29uc29sZS5sb2coXCJzdWI6IFwiLCBzdWJmdW5jKTtcclxuXHJcbi8vbGV0IHJlc3VsdCA9IGRpY2Uucm9sbERpZSgxMCk7XHJcbi8vY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbi8vbGV0IGRpY2VUb3RhbCA9IGRpY2Uucm9sbERpY2UoMywgOCk7XHJcbi8vY29uc29sZS5sb2coZGljZVRvdGFsKTtcclxuXHJcbi8vbGV0IG15U3RhdHMgPSBkaWNlLnJvbGxTdGF0cygpO1xyXG4vL2NvbnNvbGUubG9nKG15U3RhdHMpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/underdash.js":
/*!**************************!*\
  !*** ./src/underdash.js ***!
  \**************************/
/*! exports provided: default, first, last */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"first\", function() { return first; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"last\", function() { return last; });\n/* harmony default export */ __webpack_exports__[\"default\"] = ((() => {\r\n  return {\r\n    bob: \"robert\",\r\n  };\r\n})());\r\n\r\nlet first = function (array, n) {\r\n  if (!Array.isArray) {\r\n    return \"This is not an array\";\r\n  }\r\n  if (typeof n !== \"undefined\") {\r\n    return arr[0];\r\n  }\r\n  return array[0];\r\n};\r\n\r\nlet last = function (array, n) {\r\n  if (!Array.isArray) {\r\n    return \"This is not an array\";\r\n  }\r\n  if (typeof n !== \"undefined\") {\r\n    return array.length - 1;\r\n  }\r\n  return array.length - 1;\r\n};\r\n\r\n//function without(array, value) {\r\n//let value\r\n//if(!Array.isArray) {\r\n//return \"This is not an array\";\r\n//}\r\n//if (value = n )\r\n//}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdW5kZXJkYXNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3VuZGVyZGFzaC5qcz9hMDM0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGJvYjogXCJyb2JlcnRcIixcclxuICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGxldCBmaXJzdCA9IGZ1bmN0aW9uIChhcnJheSwgbikge1xyXG4gIGlmICghQXJyYXkuaXNBcnJheSkge1xyXG4gICAgcmV0dXJuIFwiVGhpcyBpcyBub3QgYW4gYXJyYXlcIjtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBuICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICByZXR1cm4gYXJyWzBdO1xyXG4gIH1cclxuICByZXR1cm4gYXJyYXlbMF07XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGxhc3QgPSBmdW5jdGlvbiAoYXJyYXksIG4pIHtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkpIHtcclxuICAgIHJldHVybiBcIlRoaXMgaXMgbm90IGFuIGFycmF5XCI7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgbiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuIGFycmF5Lmxlbmd0aCAtIDE7XHJcbiAgfVxyXG4gIHJldHVybiBhcnJheS5sZW5ndGggLSAxO1xyXG59O1xyXG5cclxuLy9mdW5jdGlvbiB3aXRob3V0KGFycmF5LCB2YWx1ZSkge1xyXG4vL2xldCB2YWx1ZVxyXG4vL2lmKCFBcnJheS5pc0FycmF5KSB7XHJcbi8vcmV0dXJuIFwiVGhpcyBpcyBub3QgYW4gYXJyYXlcIjtcclxuLy99XHJcbi8vaWYgKHZhbHVlID0gbiApXHJcbi8vfVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/underdash.js\n");

/***/ })

/******/ });