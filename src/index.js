import _ from "./underdash";

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const diff = document.querySelector("#diff");
const intersect = document.querySelector("#intersect");
const zip = document.querySelector("#zip");
const unzip = document.querySelector("#unzip");
const union = document.querySelector("#union");
const initial = document.querySelector("#initial");
const rest = document.querySelector("#rest");
const compact = document.querySelector("#compact");

const firstItems = _.first([1, 2, 3, 4], 2);
const lastItems = _.last([1, 2, 3, 4], 2);
const difference = _.difference(["bob", "dude", "loop"], ["dude", "loop"]);
const intersection = _.intersection(["bob", "dude", "loop"], ["dude", "loop"]);
const zipItems = _.zip([1, 2, 3, 4], ["bob", "dude", "loop", "geraldine"]);
const unzipItems = _.unzip([
  [1, "bob"],
  [2, "dude"],
  [3, "loop"],
  [4, "geraldine"],
]);
const unionItems = _.union([1, 2, 3, 4], [3, 4, 5, 6]);
const initialItems = _.initial([1, 2, 3, "tree", "flower"]);
const restItems = _.rest([1, 2, 3, 4, "tree", "flower"], 3);
const compactItems = _.compact([0, 1, false, 2, "", 3]);

first.innerHTML = JSON.stringify(firstItems);
last.innerHTML = JSON.stringify(lastItems);
diff.innerHTML = JSON.stringify(difference);
intersect.innerHTML = JSON.stringify(intersection);
zip.innerHTML = JSON.stringify(zipItems);
unzip.innerHTML = JSON.stringify(unzipItems);
union.innerHTML = JSON.stringify(unionItems);
initial.innerHTML = JSON.stringify(initialItems);
rest.innerHTML = JSON.stringify(restItems);
compact.innerHTML = JSON.stringify(compactItems);

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
