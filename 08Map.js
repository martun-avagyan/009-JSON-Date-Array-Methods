"use strict";
const mapMethod = function (arr, fn) {
  const arrToReturn = [];
  for (let i = 0; i < arr.length; i++) {
    arrToReturn.push(fn(arr[i]));
  }
  return arrToReturn;
};
const testArr = [1, 2, 3, "a", "b", "c"];
console.log(mapMethod(testArr, (num) => typeof num));
