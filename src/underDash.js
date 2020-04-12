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
          )} is not a valid number of items. Please use a number > 0`
        );
      }
      return array.slice(0, n);
    },
    last(array, n) {
      if (!Array.isArray(array)) {
        throw new Error(
          `${JSON.stringify(
            array
          )} is not an array. The last function only works on arrays.`
        );
      }
      if (typeof n === "undefined") {
        return array[array.length - 1];
      }
      if (!(n >= 1)) {
        throw new Error(
          `${JSON.stringify(
            n
          )} is not a valid number of items. Please use a number > 0`
        );
      }
      return array.slice(Math.max(array.length - n, 0));
    },
    difference(array1, array2) {
      if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new Error(
          `${JSON.stringify(
            array1
          )} is not an array. The difference function only works on arrays.`
        );
      }
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
    },
    intersection(array1, array2) {
      if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new Error(
          `${JSON.stringify(
            array1
          )} is not an array. The intersection function only works on arrays.`
        );
      }
      let set1 = new Set(array1);
      let set2 = new Set(array2);
      let intersection = new Set([...set1].filter((x) => set2.has(x)));
      return Array.from(intersection);
    },
    zip(array1, array2) {
      if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new Error(
          `${JSON.stringify(
            array1
          )} is not an array. The zip function only works on arrays.`
        );
      }
      let newArray = array1.map(function (e, i) {
        return [e, array2[i]];
      });
      return newArray;
    },
    unzip(array) {
      if (!Array.isArray(array)) {
        throw new Error(
          `${JSON.stringify(
            array
          )} is not an array. The unzip function only works on arrays.`
        );
      }
      return "_.unzip isn't working";
    },
    union(array1, array2) {
      if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new Error(
          `${JSON.stringify(
            array1
          )} is not an array. The union function only works on arrays.`
        );
      }
      let concatArray = [...array1, ...array2];
      let arrayUnion = [...new Set(concatArray)];
      return arrayUnion;
    },
    initial(array, n) {
      if (!Array.isArray(array)) {
        throw new Error(
          `${JSON.stringify(
            array
          )} is not an array. The initial function only works on arrays.`
        );
      }
      if (typeof n === "undefined") {
        array.pop();
        return array;
      }
      if (!(n >= 1)) {
        throw new Error(
          `${JSON.stringify(
            n
          )} is not a valid number of items. Please use a number > 0`
        );
      }
      for (let i = 0; i < n; i++) {
        array.pop();
      }
      return array;
    },
    rest(array, index) {
      if (!Array.isArray(array)) {
        throw new Error(
          `${JSON.stringify(
            array
          )} is not an array. The rest function only works on arrays.`
        );
      }
      if (typeof index === "undefined") {
        return array;
      }
      if (!(index >= 1)) {
        throw new Error(
          `${JSON.stringify(
            index
          )} is not a valid index. Please use a number > 0`
        );
      }
      let i = index;
      array.splice(i, 1);
      return array, "_.rest isn't working";
    },
    compact(array) {
      if (!Array.isArray(array)) {
        throw new Error(
          `${JSON.stringify(
            array
          )} is not an array. The compact function only works on arrays.`
        );
      }
      let filtered = array.filter(Boolean);
      return filtered;
    },
  };
})();
