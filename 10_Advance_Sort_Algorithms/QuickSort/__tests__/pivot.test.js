import { pivot } from '../pivot';

describe('pivot(arr, start, end) function works properly', () => {
  it('with parameters', () => {
    let testArr = [4, 8, 2, 1, 5, 7, 6, 3];

    // sort first half of array
    pivot(testArr, 0, 4);
    expect(testArr).toStrictEqual([1, 2, 4, 8, 5, 7, 6, 3]);
    // sort second half of array

    testArr = [4, 8, 2, 1, 5, 7, 6, 3];
    pivot(testArr, 4, 8);
    expect(testArr).toStrictEqual([4, 8, 2, 1, 3, 5, 6, 7]);
  });
});
