import { quickSort } from '../quickSort';

describe('quickSort works properly', () => {
  it('and sort array', () => {
    const testArr = [2, 8, 4, 1, 5, 7, 6, 3, 9];

    expect(quickSort(testArr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
