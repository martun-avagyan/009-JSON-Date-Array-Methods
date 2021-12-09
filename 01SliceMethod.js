"use strict";

const testArr = [1, 2, 3, 4, 5, "b"];
const mySlice = function (arr, start, end) {
  let arrLength = 0;
  const toReturn = [];
  if (typeof end === "undefined") {
    while (arr[arrLength] !== undefined) {
      arrLength++;
    }
    let index = 0;
    for (let i = start; i < arrLength; i++) {
      toReturn[index] = arr[i];
      index++;
    }
  } else {
    let index = 0;
    for (let i = start; i < end; i++) {
      toReturn[index] = arr[i];
      index++;
    }
  }
  return toReturn;
};
console.log(mySlice(testArr, 1));
console.log(testArr.slice(1));
