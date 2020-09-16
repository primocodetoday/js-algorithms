// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// Naive
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}
console.log(sumZero1([5, -4, -3, -2, -1, 0, 2, 3, 4, 8]));
// Time = 0(n^2)

// Refactored
function sumZero2(arr) {
  let begin = 0;
  let end = arr.length - 1;
  while (begin < end) {
    const sum = arr[begin] + arr[end];
    if (sum === 0) {
      return [arr[begin], arr[end]];
    }
    if (sum > 0) {
      end--;
    } else {
      begin++;
    }
  }
  return undefined;
}
// Time O(n)

console.log(sumZero2([-5, -4, -3, -2, -1, 0, 2, 3, 4, 8]));
