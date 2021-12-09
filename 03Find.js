"use strict";

const find = function (arr, myFunction) {
  if (!Array.isArray(arr)) {
    return "Parameter should be an array";
  }
  for (let i = 0; i < arr.length; i++) {
    if (myFunction(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};

const testFunction = (element) => element > 3;
console.log([1, 2, 3, 4, 5].find(testFunction));
console.log(find([1, 2, 3, 4, 5], testFunction));
