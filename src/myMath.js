export let hi = "hello from myMath";

export let myMath = (function () {
  //private variables and functions
  return {
    add: function (num1, num2) {
      return num1 + num2;
    },
    subtract: function (num1, num2) {
      return num1 - num2;
    },
  };
})();
