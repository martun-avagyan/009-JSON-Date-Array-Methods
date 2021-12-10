"use strict";
const everyMethod = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      continue;
    }
    return false;
  }
  return true;
};

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(everyMethod(testArr, (num) => num <= 10));
