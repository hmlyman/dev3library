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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _underdash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./underdash */ \"./src/underdash.js\");\n\r\n\r\nconst first = document.querySelector(\"#first\");\r\nconst last = document.querySelector(\"#last\");\r\nconst diff = document.querySelector(\"#diff\");\r\nconst intersect = document.querySelector(\"#intersect\");\r\nconst zip = document.querySelector(\"#zip\");\r\nconst unzip = document.querySelector(\"#unzip\");\r\nconst union = document.querySelector(\"#union\");\r\nconst initial = document.querySelector(\"#initial\");\r\nconst rest = document.querySelector(\"#rest\");\r\nconst compact = document.querySelector(\"#compact\");\r\n\r\nconst firstItems = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].first([1, 2, 3, 4], 2);\r\nconst lastItems = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].last([1, 2, 3, 4], 2);\r\nconst difference = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difference([\"bob\", \"dude\", \"loop\"], [\"dude\", \"loop\"]);\r\nconst intersection = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].intersection([\"bob\", \"dude\", \"loop\"], [\"dude\", \"loop\"]);\r\nconst zipItems = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].zip([1, 2, 3, 4], [\"bob\", \"dude\", \"loop\", \"geraldine\"]);\r\nconst unzipItems = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].unzip([\r\n  [1, \"bob\"],\r\n  [2, \"dude\"],\r\n  [3, \"loop\"],\r\n  [4, \"geraldine\"],\r\n]);\r\nconst unionItems = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].union([1, 2, 3, 4], [3, 4, 5, 6]);\r\nconst initialItems = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initial([1, 2, 3, \"tree\", \"flower\"]);\r\nconst restItems = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rest([1, 2, 3, 4, \"tree\", \"flower\"], 3);\r\nconst compactItems = _underdash__WEBPACK_IMPORTED_MODULE_0__[\"default\"].compact([0, 1, false, 2, \"\", 3]);\r\n\r\nfirst.innerHTML = JSON.stringify(firstItems);\r\nlast.innerHTML = JSON.stringify(lastItems);\r\ndiff.innerHTML = JSON.stringify(difference);\r\nintersect.innerHTML = JSON.stringify(intersection);\r\nzip.innerHTML = JSON.stringify(zipItems);\r\nunzip.innerHTML = JSON.stringify(unzipItems);\r\nunion.innerHTML = JSON.stringify(unionItems);\r\ninitial.innerHTML = JSON.stringify(initialItems);\r\nrest.innerHTML = JSON.stringify(restItems);\r\ncompact.innerHTML = JSON.stringify(compactItems);\r\n\r\n//import { myMath } from \"./myMath\";\r\n//import { dice } from \"./dice\";\r\n\r\n//let x = 2;\r\n//let y = 3;\r\n\r\n//let addfunc = myMath.add(x, y);\r\n\r\n//console.log(\"add: \", addfunc);\r\n\r\n//let subfunc = myMath.subtract(x, y);\r\n\r\n//console.log(\"sub: \", subfunc);\r\n\r\n//let result = dice.rollDie(10);\r\n//console.log(result);\r\n\r\n//let diceTotal = dice.rollDice(3, 8);\r\n//console.log(diceTotal);\r\n\r\n//let myStats = dice.rollStats();\r\n//console.log(myStats);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwiLi91bmRlcmRhc2hcIjtcclxuXHJcbmNvbnN0IGZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaXJzdFwiKTtcclxuY29uc3QgbGFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGFzdFwiKTtcclxuY29uc3QgZGlmZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlmZlwiKTtcclxuY29uc3QgaW50ZXJzZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnRlcnNlY3RcIik7XHJcbmNvbnN0IHppcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjemlwXCIpO1xyXG5jb25zdCB1bnppcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdW56aXBcIik7XHJcbmNvbnN0IHVuaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1bmlvblwiKTtcclxuY29uc3QgaW5pdGlhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5pdGlhbFwiKTtcclxuY29uc3QgcmVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdFwiKTtcclxuY29uc3QgY29tcGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcGFjdFwiKTtcclxuXHJcbmNvbnN0IGZpcnN0SXRlbXMgPSBfLmZpcnN0KFsxLCAyLCAzLCA0XSwgMik7XHJcbmNvbnN0IGxhc3RJdGVtcyA9IF8ubGFzdChbMSwgMiwgMywgNF0sIDIpO1xyXG5jb25zdCBkaWZmZXJlbmNlID0gXy5kaWZmZXJlbmNlKFtcImJvYlwiLCBcImR1ZGVcIiwgXCJsb29wXCJdLCBbXCJkdWRlXCIsIFwibG9vcFwiXSk7XHJcbmNvbnN0IGludGVyc2VjdGlvbiA9IF8uaW50ZXJzZWN0aW9uKFtcImJvYlwiLCBcImR1ZGVcIiwgXCJsb29wXCJdLCBbXCJkdWRlXCIsIFwibG9vcFwiXSk7XHJcbmNvbnN0IHppcEl0ZW1zID0gXy56aXAoWzEsIDIsIDMsIDRdLCBbXCJib2JcIiwgXCJkdWRlXCIsIFwibG9vcFwiLCBcImdlcmFsZGluZVwiXSk7XHJcbmNvbnN0IHVuemlwSXRlbXMgPSBfLnVuemlwKFtcclxuICBbMSwgXCJib2JcIl0sXHJcbiAgWzIsIFwiZHVkZVwiXSxcclxuICBbMywgXCJsb29wXCJdLFxyXG4gIFs0LCBcImdlcmFsZGluZVwiXSxcclxuXSk7XHJcbmNvbnN0IHVuaW9uSXRlbXMgPSBfLnVuaW9uKFsxLCAyLCAzLCA0XSwgWzMsIDQsIDUsIDZdKTtcclxuY29uc3QgaW5pdGlhbEl0ZW1zID0gXy5pbml0aWFsKFsxLCAyLCAzLCBcInRyZWVcIiwgXCJmbG93ZXJcIl0pO1xyXG5jb25zdCByZXN0SXRlbXMgPSBfLnJlc3QoWzEsIDIsIDMsIDQsIFwidHJlZVwiLCBcImZsb3dlclwiXSwgMyk7XHJcbmNvbnN0IGNvbXBhY3RJdGVtcyA9IF8uY29tcGFjdChbMCwgMSwgZmFsc2UsIDIsIFwiXCIsIDNdKTtcclxuXHJcbmZpcnN0LmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGZpcnN0SXRlbXMpO1xyXG5sYXN0LmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGxhc3RJdGVtcyk7XHJcbmRpZmYuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoZGlmZmVyZW5jZSk7XHJcbmludGVyc2VjdC5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShpbnRlcnNlY3Rpb24pO1xyXG56aXAuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoemlwSXRlbXMpO1xyXG51bnppcC5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeSh1bnppcEl0ZW1zKTtcclxudW5pb24uaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkodW5pb25JdGVtcyk7XHJcbmluaXRpYWwuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoaW5pdGlhbEl0ZW1zKTtcclxucmVzdC5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShyZXN0SXRlbXMpO1xyXG5jb21wYWN0LmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGNvbXBhY3RJdGVtcyk7XHJcblxyXG4vL2ltcG9ydCB7IG15TWF0aCB9IGZyb20gXCIuL215TWF0aFwiO1xyXG4vL2ltcG9ydCB7IGRpY2UgfSBmcm9tIFwiLi9kaWNlXCI7XHJcblxyXG4vL2xldCB4ID0gMjtcclxuLy9sZXQgeSA9IDM7XHJcblxyXG4vL2xldCBhZGRmdW5jID0gbXlNYXRoLmFkZCh4LCB5KTtcclxuXHJcbi8vY29uc29sZS5sb2coXCJhZGQ6IFwiLCBhZGRmdW5jKTtcclxuXHJcbi8vbGV0IHN1YmZ1bmMgPSBteU1hdGguc3VidHJhY3QoeCwgeSk7XHJcblxyXG4vL2NvbnNvbGUubG9nKFwic3ViOiBcIiwgc3ViZnVuYyk7XHJcblxyXG4vL2xldCByZXN1bHQgPSBkaWNlLnJvbGxEaWUoMTApO1xyXG4vL2NvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4vL2xldCBkaWNlVG90YWwgPSBkaWNlLnJvbGxEaWNlKDMsIDgpO1xyXG4vL2NvbnNvbGUubG9nKGRpY2VUb3RhbCk7XHJcblxyXG4vL2xldCBteVN0YXRzID0gZGljZS5yb2xsU3RhdHMoKTtcclxuLy9jb25zb2xlLmxvZyhteVN0YXRzKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/underdash.js":
/*!**************************!*\
  !*** ./src/underdash.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((() => {\r\n  return {\r\n    first(array, n) {\r\n      if (!Array.isArray(array)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array\r\n          )} is not an array. The first function only works on arrays.`\r\n        );\r\n      }\r\n      if (typeof n === \"undefined\") {\r\n        return array[0];\r\n      }\r\n      if (!(n >= 1)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            n\r\n          )} is not a valid number of items. Please use a number > 0`\r\n        );\r\n      }\r\n      return array.slice(0, n);\r\n    },\r\n    last(array, n) {\r\n      if (!Array.isArray(array)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array\r\n          )} is not an array. The last function only works on arrays.`\r\n        );\r\n      }\r\n      if (typeof n === \"undefined\") {\r\n        return array[array.length - 1];\r\n      }\r\n      if (!(n >= 1)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            n\r\n          )} is not a valid number of items. Please use a number > 0`\r\n        );\r\n      }\r\n      return array.slice(Math.max(array.length - n, 0));\r\n    },\r\n    difference(array1, array2) {\r\n      if (!Array.isArray(array1) || !Array.isArray(array2)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array1\r\n          )} is not an array. The difference function only works on arrays.`\r\n        );\r\n      }\r\n      let a = [];\r\n      let diff = [];\r\n      for (let i = 0; i < array1.length; i++) {\r\n        a[array1[i]] = true;\r\n      }\r\n      for (let i = 0; i < array2.length; i++) {\r\n        if (a[array2[i]]) {\r\n          delete a[array2[i]];\r\n        } else {\r\n          a[array2[i]] = true;\r\n        }\r\n      }\r\n      for (let k in a) {\r\n        diff.push(k);\r\n      }\r\n      return diff;\r\n    },\r\n    intersection(array1, array2) {\r\n      if (!Array.isArray(array1) || !Array.isArray(array2)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array1\r\n          )} is not an array. The intersection function only works on arrays.`\r\n        );\r\n      }\r\n      let set1 = new Set(array1);\r\n      let set2 = new Set(array2);\r\n      let intersection = new Set([...set1].filter((x) => set2.has(x)));\r\n      return Array.from(intersection);\r\n    },\r\n    zip(array1, array2) {\r\n      if (!Array.isArray(array1) || !Array.isArray(array2)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array1\r\n          )} is not an array. The zip function only works on arrays.`\r\n        );\r\n      }\r\n      let newArray = array1.map(function (e, i) {\r\n        return [e, array2[i]];\r\n      });\r\n      return newArray;\r\n    },\r\n    unzip(array) {\r\n      if (!Array.isArray(array)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array\r\n          )} is not an array. The unzip function only works on arrays.`\r\n        );\r\n      }\r\n      return \"_.unzip isn't working\";\r\n    },\r\n    union(array1, array2) {\r\n      if (!Array.isArray(array1) || !Array.isArray(array2)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array1\r\n          )} is not an array. The union function only works on arrays.`\r\n        );\r\n      }\r\n      let concatArray = [...array1, ...array2];\r\n      let arrayUnion = [...new Set(concatArray)];\r\n      return arrayUnion;\r\n    },\r\n    initial(array, n) {\r\n      if (!Array.isArray(array)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array\r\n          )} is not an array. The initial function only works on arrays.`\r\n        );\r\n      }\r\n      if (typeof n === \"undefined\") {\r\n        array.pop();\r\n        return array;\r\n      }\r\n      if (!(n >= 1)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            n\r\n          )} is not a valid number of items. Please use a number > 0`\r\n        );\r\n      }\r\n      for (let i = 0; i < n; i++) {\r\n        array.pop();\r\n      }\r\n      return array;\r\n    },\r\n    rest(array, index) {\r\n      if (!Array.isArray(array)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array\r\n          )} is not an array. The rest function only works on arrays.`\r\n        );\r\n      }\r\n      if (typeof index === \"undefined\") {\r\n        return array;\r\n      }\r\n      if (!(index >= 1)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            index\r\n          )} is not a valid index. Please use a number > 0`\r\n        );\r\n      }\r\n      let i = index;\r\n      array.splice(i, 1);\r\n      return array, \"_.rest isn't working\";\r\n    },\r\n    compact(array) {\r\n      if (!Array.isArray(array)) {\r\n        throw new Error(\r\n          `${JSON.stringify(\r\n            array\r\n          )} is not an array. The compact function only works on arrays.`\r\n        );\r\n      }\r\n      let filtered = array.filter(Boolean);\r\n      return filtered;\r\n    },\r\n  };\r\n})());\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdW5kZXJkYXNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3VuZGVyZGFzaC5qcz9hMDM0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZpcnN0KGFycmF5LCBuKSB7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgJHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAgYXJyYXlcclxuICAgICAgICAgICl9IGlzIG5vdCBhbiBhcnJheS4gVGhlIGZpcnN0IGZ1bmN0aW9uIG9ubHkgd29ya3Mgb24gYXJyYXlzLmBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiBhcnJheVswXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIShuID49IDEpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIG5cclxuICAgICAgICAgICl9IGlzIG5vdCBhIHZhbGlkIG51bWJlciBvZiBpdGVtcy4gUGxlYXNlIHVzZSBhIG51bWJlciA+IDBgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXJyYXkuc2xpY2UoMCwgbik7XHJcbiAgICB9LFxyXG4gICAgbGFzdChhcnJheSwgbikge1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIGFycmF5XHJcbiAgICAgICAgICApfSBpcyBub3QgYW4gYXJyYXkuIFRoZSBsYXN0IGZ1bmN0aW9uIG9ubHkgd29ya3Mgb24gYXJyYXlzLmBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbiA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIShuID49IDEpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIG5cclxuICAgICAgICAgICl9IGlzIG5vdCBhIHZhbGlkIG51bWJlciBvZiBpdGVtcy4gUGxlYXNlIHVzZSBhIG51bWJlciA+IDBgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXJyYXkuc2xpY2UoTWF0aC5tYXgoYXJyYXkubGVuZ3RoIC0gbiwgMCkpO1xyXG4gICAgfSxcclxuICAgIGRpZmZlcmVuY2UoYXJyYXkxLCBhcnJheTIpIHtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5MSkgfHwgIUFycmF5LmlzQXJyYXkoYXJyYXkyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICBhcnJheTFcclxuICAgICAgICAgICl9IGlzIG5vdCBhbiBhcnJheS4gVGhlIGRpZmZlcmVuY2UgZnVuY3Rpb24gb25seSB3b3JrcyBvbiBhcnJheXMuYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGEgPSBbXTtcclxuICAgICAgbGV0IGRpZmYgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheTEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBhW2FycmF5MVtpXV0gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFbYXJyYXkyW2ldXSkge1xyXG4gICAgICAgICAgZGVsZXRlIGFbYXJyYXkyW2ldXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYVthcnJheTJbaV1dID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgayBpbiBhKSB7XHJcbiAgICAgICAgZGlmZi5wdXNoKGspO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkaWZmO1xyXG4gICAgfSxcclxuICAgIGludGVyc2VjdGlvbihhcnJheTEsIGFycmF5Mikge1xyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkxKSB8fCAhQXJyYXkuaXNBcnJheShhcnJheTIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIGFycmF5MVxyXG4gICAgICAgICAgKX0gaXMgbm90IGFuIGFycmF5LiBUaGUgaW50ZXJzZWN0aW9uIGZ1bmN0aW9uIG9ubHkgd29ya3Mgb24gYXJyYXlzLmBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBzZXQxID0gbmV3IFNldChhcnJheTEpO1xyXG4gICAgICBsZXQgc2V0MiA9IG5ldyBTZXQoYXJyYXkyKTtcclxuICAgICAgbGV0IGludGVyc2VjdGlvbiA9IG5ldyBTZXQoWy4uLnNldDFdLmZpbHRlcigoeCkgPT4gc2V0Mi5oYXMoeCkpKTtcclxuICAgICAgcmV0dXJuIEFycmF5LmZyb20oaW50ZXJzZWN0aW9uKTtcclxuICAgIH0sXHJcbiAgICB6aXAoYXJyYXkxLCBhcnJheTIpIHtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5MSkgfHwgIUFycmF5LmlzQXJyYXkoYXJyYXkyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICBhcnJheTFcclxuICAgICAgICAgICl9IGlzIG5vdCBhbiBhcnJheS4gVGhlIHppcCBmdW5jdGlvbiBvbmx5IHdvcmtzIG9uIGFycmF5cy5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbmV3QXJyYXkgPSBhcnJheTEubWFwKGZ1bmN0aW9uIChlLCBpKSB7XHJcbiAgICAgICAgcmV0dXJuIFtlLCBhcnJheTJbaV1dO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgfSxcclxuICAgIHVuemlwKGFycmF5KSB7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgJHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAgYXJyYXlcclxuICAgICAgICAgICl9IGlzIG5vdCBhbiBhcnJheS4gVGhlIHVuemlwIGZ1bmN0aW9uIG9ubHkgd29ya3Mgb24gYXJyYXlzLmBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBcIl8udW56aXAgaXNuJ3Qgd29ya2luZ1wiO1xyXG4gICAgfSxcclxuICAgIHVuaW9uKGFycmF5MSwgYXJyYXkyKSB7XHJcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheTEpIHx8ICFBcnJheS5pc0FycmF5KGFycmF5MikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgJHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAgYXJyYXkxXHJcbiAgICAgICAgICApfSBpcyBub3QgYW4gYXJyYXkuIFRoZSB1bmlvbiBmdW5jdGlvbiBvbmx5IHdvcmtzIG9uIGFycmF5cy5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgY29uY2F0QXJyYXkgPSBbLi4uYXJyYXkxLCAuLi5hcnJheTJdO1xyXG4gICAgICBsZXQgYXJyYXlVbmlvbiA9IFsuLi5uZXcgU2V0KGNvbmNhdEFycmF5KV07XHJcbiAgICAgIHJldHVybiBhcnJheVVuaW9uO1xyXG4gICAgfSxcclxuICAgIGluaXRpYWwoYXJyYXksIG4pIHtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICBhcnJheVxyXG4gICAgICAgICAgKX0gaXMgbm90IGFuIGFycmF5LiBUaGUgaW5pdGlhbCBmdW5jdGlvbiBvbmx5IHdvcmtzIG9uIGFycmF5cy5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIG4gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBhcnJheS5wb3AoKTtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCEobiA+PSAxKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICBuXHJcbiAgICAgICAgICApfSBpcyBub3QgYSB2YWxpZCBudW1iZXIgb2YgaXRlbXMuIFBsZWFzZSB1c2UgYSBudW1iZXIgPiAwYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBhcnJheS5wb3AoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9LFxyXG4gICAgcmVzdChhcnJheSwgaW5kZXgpIHtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICBhcnJheVxyXG4gICAgICAgICAgKX0gaXMgbm90IGFuIGFycmF5LiBUaGUgcmVzdCBmdW5jdGlvbiBvbmx5IHdvcmtzIG9uIGFycmF5cy5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIGluZGV4ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghKGluZGV4ID49IDEpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICApfSBpcyBub3QgYSB2YWxpZCBpbmRleC4gUGxlYXNlIHVzZSBhIG51bWJlciA+IDBgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgaSA9IGluZGV4O1xyXG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIHJldHVybiBhcnJheSwgXCJfLnJlc3QgaXNuJ3Qgd29ya2luZ1wiO1xyXG4gICAgfSxcclxuICAgIGNvbXBhY3QoYXJyYXkpIHtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICBhcnJheVxyXG4gICAgICAgICAgKX0gaXMgbm90IGFuIGFycmF5LiBUaGUgY29tcGFjdCBmdW5jdGlvbiBvbmx5IHdvcmtzIG9uIGFycmF5cy5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgZmlsdGVyZWQgPSBhcnJheS5maWx0ZXIoQm9vbGVhbik7XHJcbiAgICAgIHJldHVybiBmaWx0ZXJlZDtcclxuICAgIH0sXHJcbiAgfTtcclxufSkoKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/underdash.js\n");

/***/ })

/******/ });