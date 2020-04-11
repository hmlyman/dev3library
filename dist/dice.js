"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dice = void 0;

var dice = function () {
  return {
    rollDie: function rollDie(dieType) {
      return Math.floor(Math.random() * Math.floor(dieType)) + 1;
    },
    rollDice: function rollDice(numOfDie, dieType) {
      var results = [];

      for (var i = 0; i < numOfDie; i++) {
        results.push(dice.rollDie(dieType));
      }

      return results;
    },
    rollStats: function rollStats() {
      var stats = [];
      var diceResults = [];
      var statScore;

      for (var i = 0; i < 6; i++) {
        diceResults = dice.rollDice(4, 6);
        diceResults = diceResults.sort(function (a, b) {
          return b - a;
        });
        diceResults.pop();
        statScore = diceResults[0] + diceResults[1] + diceResults[2];
        stats.push(statScore);
      }

      return stats;
    }
  };
}();

exports.dice = dice;