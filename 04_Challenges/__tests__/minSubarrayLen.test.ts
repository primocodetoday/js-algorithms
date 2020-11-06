import { minSubarrayLen } from '../minSubarrayLen';

test('minSubarrayLen() works as expected', () => {
  expect(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2); // 2 -> because [4,3] is the smallest subarray
  expect(minSubarrayLen([2, 1, 6, 5, 4], 9)).toBe(2); // 2 -> because [5,4] is the smallest subarray
  expect(minSubarrayLen([3, 1, 7, 11, 2, 9, 0, 21, 62, 33, 19], 52)).toBe(1); // 1 -> because [62] is greater than 52
  expect(minSubarrayLen([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(1);
  expect(minSubarrayLen([2, 3], 3)).toBe(1);
});
