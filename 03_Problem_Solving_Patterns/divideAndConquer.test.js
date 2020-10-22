import { search1, search2 } from './divideAndConquer';

describe('Functions works properly', () => {
  const testArr = [1, 2, 3, 4, 5, 6];

  it('Search1 works properly', () => {
    expect(search1(testArr, 2)).toBe(1);
    expect(search1(testArr, 7)).toBe(-1);
  });

  it('Search2 works properly', () => {
    expect(search2(testArr, 4)).toBe(3);
    expect(search2(testArr, 7)).toBe(-1);
  });
});
