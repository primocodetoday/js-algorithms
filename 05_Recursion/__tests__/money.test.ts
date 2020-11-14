import { calculateYears } from '../money';

test('calculateYears() works as expected', () => {
  const test1 = calculateYears(1000, 0.05, 0.18, 1100);
  // with no taxes 😁
  const test2 = calculateYears(100, 0.05, 0, 105);

  expect(test1).toBe(3);
  expect(test2).toBe(1);
});
