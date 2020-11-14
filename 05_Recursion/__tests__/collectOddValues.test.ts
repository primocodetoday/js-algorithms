import { collectOddValues1, collectOddValues2, collectOddValues3 } from '../collectOddValues';

test('collectOddValues1() works as expected', () => {
  const tArr = [1, 2, 3, 4, 5, 6, 7, 8];
  const expRes = [1, 3, 5, 7];

  expect(collectOddValues1(tArr)).toStrictEqual(expRes);
});

test('collectOddValues2() works as expected', () => {
  const tArr = [1, 2, 3, 4, 5, 6, 7, 8];
  const expRes = [1, 3, 5, 7];

  expect(collectOddValues2(tArr)).toStrictEqual(expRes);
});

test('collectOddValues3() works as expected', () => {
  const tArr = [1, 2, 3, 4, 5, 6, 7, 8];
  const expRes = [1, 3, 5, 7];

  expect(collectOddValues3(tArr)).toStrictEqual(expRes);
});
