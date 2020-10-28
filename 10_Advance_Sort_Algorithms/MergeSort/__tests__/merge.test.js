import { merge } from '../merge';

it('merge() works properly', () => {
  const numArr1 = [1, 3, 5, 7, 9, 11];
  const numArr2 = [2, 4, 6, 8, 10, 12];

  const strArr1 = ['A', 'C', 'E', 'G'];
  const strArr2 = ['B', 'D', 'F', 'H'];

  const numRes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const strRes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  expect(merge(numArr1, numArr2)).toStrictEqual(numRes);
  expect(merge(numArr2, numArr1)).toStrictEqual(numRes);
  expect(merge(strArr1, strArr2)).toStrictEqual(strRes);
  expect(merge(strArr2, strArr1)).toStrictEqual(strRes);
});
