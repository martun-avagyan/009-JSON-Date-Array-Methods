"use strict";
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterMethod = function (arr, fn) {
  const arrToReturn = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      arrToReturn.push(arr[i]);
    }
  }
  return arrToReturn;
};

console.log(filterMethod(myArr, (num) => num < 8 && num > 2));
