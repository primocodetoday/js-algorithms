﻿import { mergeSort } from '../mergeSort';

it('mergeSort() works properly', () => {
  const randomArr = [1, 3, 5, 7, 9, 11, 2, 4, 6, 8, 10, 12];
  const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  expect(mergeSort(randomArr)).toStrictEqual(result);
});
