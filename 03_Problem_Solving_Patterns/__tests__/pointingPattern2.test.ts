import { countUniqueValues1, countUniqueValues2 } from '../pointingPattern2';

describe('Functions works properly', () => {
  const testArr1 = [1, 1, 1, 1, 1, 2];
  const testArr2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
  const testArr3: number[] = [];
  const testArr4 = [-2, -1, -1, 0, 1];

  // console.time('sumZero1');
  it('countUniqueValues1 works properly', () => {
    expect(countUniqueValues1(testArr1)).toBe(2);
    expect(countUniqueValues1(testArr2)).toBe(7);
    expect(countUniqueValues1(testArr3)).toBe(0);
    expect(countUniqueValues1(testArr4)).toBe(4);
  });
  // console.timeEnd('sumZero1');
  // newSet: 16 ms best time

  // console.time('sumZero2');
  it('countUniqueValues2 works properly', () => {
    expect(countUniqueValues2(testArr1)).toBe(2);
    expect(countUniqueValues2(testArr2)).toBe(7);
    expect(countUniqueValues2(testArr3)).toBe(0);
    expect(countUniqueValues2(testArr4)).toBe(4);
  });
  // console.timeEnd('sumZero2');
  // forLoop: 1-2 ms
});
