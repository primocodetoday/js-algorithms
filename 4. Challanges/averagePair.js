﻿// Write a function called averagePair Given a sorted array of
// integers and a target average, determine if there is a pair of
// values in the array where the average of the pair equals the target
// average. There may be more than one pair that matches the average

const averagePair = (arr, b) => {
  if (arr.length === 0) {
    return false;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const avg = Number.parseFloat(
      (arr[start] + arr[end]) / 2,
    ).toFixed(1);
    if (avg < b) {
      start++;
    } else if (avg > b) {
      end--;
    } else {
      return true;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
