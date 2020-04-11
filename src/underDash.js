export default (() => {
  return {
    bob: "robert",
  };
})();

export let first = function (array, n) {
  if (!Array.isArray) {
    return "This is not an array";
  }
  if (typeof n !== "undefined") {
    return arr[0];
  }
  return array[0];
};

export let last = function (array, n) {
  if (!Array.isArray) {
    return "This is not an array";
  }
  if (typeof n !== "undefined") {
    return array.length - 1;
  }
  return array.length - 1;
};

//function without(array, value) {
//let value
//if(!Array.isArray) {
//return "This is not an array";
//}
//if (value = n )
//}
