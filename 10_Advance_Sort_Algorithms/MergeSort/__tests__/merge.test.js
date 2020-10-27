import { merge } from '../merge';

it('merge() works properly', () => {
  const testArr1 = [1, 3, 5, 7, 9, 11];
  const testArr2 = [2, 4, 6, 8, 10, 12];

  const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  expect(merge(testArr1, testArr2)).toStrictEqual(result);
  expect(merge(testArr2, testArr1)).toStrictEqual(result);
});
