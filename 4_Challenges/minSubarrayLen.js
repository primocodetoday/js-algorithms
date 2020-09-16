﻿const minSubarrayLen = (nums, sum) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubarrayLen([2, 1, 6, 5, 4], 9));
console.log(
  minSubarrayLen([3, 1, 7, 11, 2, 9, 0, 21, 62, 33, 19], 52),
);
console.log(minSubarrayLen([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(minSubarrayLen([2, 3], 3));
