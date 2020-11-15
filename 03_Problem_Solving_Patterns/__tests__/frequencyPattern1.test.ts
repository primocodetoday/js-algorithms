import { same1 } from '../frequencyPattern1';

describe('Functions works properly', () => {
  const testArr1 = [1, 2, 3, 2, 5, 9];
  const testArr2 = [9, 1, 4, 4, 25, 81];
  const testArr3 = [1, 7, 2, 21, 53];
  const testArr4 = [1, 5, 10, 17, 26, 37];

  it('same1 works properly', () => {
    expect(same1(testArr1, testArr2)).toBeTruthy();
    expect(same1(testArr1, testArr3)).toBeFalsy();
    expect(same1(testArr1, testArr4)).toBeFalsy();
  });

  // it('same2 works properly', () => {
  //   // expect(same2(testArr1, testArr2)).toBeTruthy();
  //   expect(same2(testArr1, testArr3)).toBeFalsy();
  //   expect(same2(testArr1, testArr4)).toBeFalsy();
  //   expect(same2(testArr1, testArr2)).toBeTruthy();
  // });
});
