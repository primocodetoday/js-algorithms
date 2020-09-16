﻿// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// solution with SET
const countUinqueValues1 = (arr) => {
  return new Set(arr).size;
};

console.time('newSet');
console.log(countUinqueValues1([1, 1, 1, 1, 1, 2]));
console.log(countUinqueValues1([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUinqueValues1([]));
console.log(countUinqueValues1([-2, -1, -1, 0, 1]));
console.timeEnd('newSet');

// Loop solution
const countUinqueValues2 = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.time('forLoop');
console.log(countUinqueValues2([1, 1, 1, 1, 1, 2]));
console.log(countUinqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUinqueValues2([]));
console.log(countUinqueValues2([-2, -1, -1, 0, 1]));
console.timeEnd('forLoop');
