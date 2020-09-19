/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

// Frequency Pattern 1
// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// Naive solution
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i += 1) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2); // returns first element fit to pattern or -1
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1); // delete fit index from arr2
  }
  return true;
}

console.log(same1([1, 2, 3, 2, 5, 9], [9, 1, 4, 4, 25, 81]));

// Refactored
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // is it already in object - if yes (add + 1) , if no = 0
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same2([1, 2, 3, 2, 5, 9], [9, 1, 4, 4, 25, 81]));