/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
console.log('------ refactor start ------');
function same(arr1, arr2) {
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

const time3 = performance.now();
same([1, 2, 3, 2, 5, 9], [9, 1, 4, 4, 25, 81]);
const time4 = performance.now();

console.log(`Time Elapsed: ${(time4 - time3) / 1000} seconds.`);
console.log('------ refactor end ------');
