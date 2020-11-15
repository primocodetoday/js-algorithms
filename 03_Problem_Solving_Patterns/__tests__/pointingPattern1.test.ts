import { sumZero1, sumZero2 } from '../pointingPattern1';

describe('Functions works properly', () => {
  const testArr1 = [-5, -4, -3, -2, -1, 0, 2, 3, 4, 8];
  const testArr2 = [-5, -4, -2, 0, 1, 3, 6, 8];

  it('sumZero1 works properly', () => {
    expect(sumZero1(testArr1)).toEqual([-4, 4]);
    expect(sumZero1(testArr2)).toBe(undefined);
  });

  it('sumZero2 works properly', () => {
    expect(sumZero2(testArr1)).toEqual([-4, 4]);
    expect(sumZero2(testArr2)).toBe(undefined);
  });
});
