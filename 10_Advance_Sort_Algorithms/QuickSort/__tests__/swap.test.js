import { swap } from '../swap';

it('swap(arr, x, y) function works properly', () => {
  const testArr = [1, 2, 3, 4, 5, 6];

  swap(testArr, 0, 5);
  expect(testArr).toStrictEqual([6, 2, 3, 4, 5, 1]);
});
