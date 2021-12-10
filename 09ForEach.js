"use strict";
const forEachMethod = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
    console.log();
    continue;
  }
};

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(forEachMethod(testArr, (num) => console.log(num)));
console.log(testArr);
