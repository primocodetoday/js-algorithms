// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// Naive
export const sumZero1 = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
};
// Time = 0(n^2)

// Refactored
export const sumZero2 = (arr: number[]) => {
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
};
// Time O(n)
