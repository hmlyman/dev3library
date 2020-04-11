import _ from "./underdash";

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const diff = document.querySelector("#diff");
const intersect = document.querySelector("#intersect");

const firstItems = _.first([1, 2, 3, 4], 2);
const lastItems = _.last([1, 2, 3, 4], 2);
const difference = _.difference(["bob", "dude", "loop"], ["dude", "loop"]);
const intersection = _.intersection(["bob", "dude", "loop"], ["dude", "loop"]);

first.innerHTML = JSON.stringify(firstItems);
last.innerHTML = JSON.stringify(lastItems);
diff.innerHTML = JSON.stringify(difference);
intersect.innerHTML = JSON.stringify(intersection);

//import { myMath } from "./myMath";
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
