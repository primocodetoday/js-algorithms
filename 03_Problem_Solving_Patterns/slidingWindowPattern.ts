// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// Time Complexity - O(N^2)
export const maxSubarraySum1 = <T extends number>(arr: T[], num: T) => {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

// Time Complexity - O(N)
export const maxSubarraySum2 = <T extends number>(arr: T[], num: T) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]; // subtract firs and add next
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};
