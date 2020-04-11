export default (() => {
  return {
    first(array, n) {
      if (!Array.isArray(array)) {
        throw new Error(
          `${JSON.stringify(
            array
          )} is not an array. The first function only works on arrays.`
        );
      }
      if (typeof n === "undefined") {
        return array[0];
      }
      if (!(n >= 1)) {
        throw new Error(
          `${JSON.stringify(
            n
          )} is not a valid number of items. Pleasu use a number > 0`
        );
      }
      return array.slice(0, n);
    },
    last(array, n) {
      if (!Array.isArray(array)) {
        throw new Error(
          `${JSON.stringify(
            array
          )} is not an array. The first function only works on arrays.`
        );
      }
      if (typeof n === "undefined") {
        return array[array.length - 1];
      }
      if (!(n >= 1)) {
        throw new Error(
          `${JSON.stringify(
            n
          )} is not a valid number of items. Pleasu use a number > 0`
        );
      }
      return array.slice(Math.max(array.length - n, 0));
    },
    difference(array1, array2) {
      if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new Error(
          `${JSON.stringify(
            array1
          )} is not an array. The first function only works on arrays.`
        );
      }
      if (typeof n === "undefined") {
        let a = [];
        let diff = [];
        for (let i = 0; i < array1.length; i++) {
          a[array1[i]] = true;
        }
        for (let i = 0; i < array2.length; i++) {
          if (a[array2[i]]) {
            delete a[array2[i]];
          } else {
            a[array2[i]] = true;
          }
        }
        for (let k in a) {
          diff.push(k);
        }
        return diff;
      }
    },
    intersection(array1, array2) {
      if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new Error(
          `${JSON.stringify(
            array1
          )} is not an array. The first function only works on arrays.`
        );
      }
      if (typeof n === "undefined") {
        var setA = new Set(array1);
        var setB = new Set(array2);
        var intersection = new Set([...setA].filter((x) => setB.has(x)));
        return Array.from(intersection);
      }
    },
  };
})();
