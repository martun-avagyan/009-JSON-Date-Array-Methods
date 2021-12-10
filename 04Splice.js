"use script";
const spliceFunction = function (arr, index, elementNumbers, replaceWith) {
  let counter = 0;
  const arrToReturn = [];
  for (let i = index; i < index + elementNumbers; i++) {
    arrToReturn[counter] = arr[i];

    counter++;
  }

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < index) {
      newArr.push(arr[i]);
    } else if (i === index) {
      newArr.push(replaceWith);
    } else if (i > index + elementNumbers) {
      newArr.push(arr[i]);
    }
  }
  arr = newArr;
  return arr;
};

const myArr = [1, 2, 3, 4, 5];
// console.log(myArr);
// console.log(myArr.splice(1, 3, "Replaced"));
// console.log(myArr);

console.log(spliceFunction(myArr, 1, 2, "Replaced"));
console.log(spliceFunction(myArr, 1, 1, "New Value"));
