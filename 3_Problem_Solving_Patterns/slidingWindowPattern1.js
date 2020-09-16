// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// Time Complexity - O(N^2)
function maxSubarraySum1(arr, num) {
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
}

console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum1([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum1([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum1([], 4));

// Time Complexity - O(N)
function maxSubarraySum2(arr, num) {
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
}

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum2([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum2([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum2([], 4));
