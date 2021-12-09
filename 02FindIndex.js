"use strict";

const findIndex = function (arr, myFunction) {
  if (!Array.isArray(arr)) {
    return "Parameter should be an array";
  }
  for (let i = 0; i < arr.length; i++) {
    if (myFunction(arr[i])) {
      return i;
    }
  }
  return -1;
};

const testFunction = (element) => element > 3;
console.log([1, 2, 3, 4, 5].findIndex(testFunction));
console.log(findIndex([1, 2, 3, 4, 5], testFunction));
