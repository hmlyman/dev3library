"use strict";

var _underdash = _interopRequireDefault(require("./underdash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = document.querySelector("#app");

var firstItems = _underdash["default"].first([1, 2, 3, 4]);

var lastItems = _underdash["default"].last([1, 2, 3, 4]);

var difference = _underdash["default"].difference([1, 2, 3, 4], [2, 3, 4]);

app.innerHTML = JSON.stringify(firstItems);
app.innerHTML = JSON.stringify(lastItems);
app.innerHTML = JSON.stringify(difference); //import { myMath } from "./myMath";
//import { dice } from "./dice";
//let x = 2;
//let y = 3;
//let addfunc = myMath.add(x, y);
//console.log("add: ", addfunc);
//let subfunc = myMath.subtract(x, y);
//console.log("sub: ", subfunc);
//let result = dice.rollDie(10);
//console.log(result);
//let diceTotal = dice.rollDice(3, 8);
//console.log(diceTotal);
//let myStats = dice.rollStats();
//console.log(myStats);