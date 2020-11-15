import { maxSubarraySum1, maxSubarraySum2 } from '../slidingWindowPattern';

describe('Functions works properly', () => {
  it('sumZero1 works properly', () => {
    expect(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    expect(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    expect(maxSubarraySum1([4, 2, 1, 6], 1)).toBe(6);
    expect(maxSubarraySum1([4, 2, 1, 6, 2], 4)).toBe(13);
    expect(maxSubarraySum1([], 4)).toBe(null);
  });

  it('sumZero1 works properly', () => {
    expect(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    expect(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    expect(maxSubarraySum2([4, 2, 1, 6], 1)).toBe(6);
    expect(maxSubarraySum2([4, 2, 1, 6, 2], 4)).toBe(13);
    expect(maxSubarraySum2([], 4)).toBe(null);
  });
});
