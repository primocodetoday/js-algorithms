import { factorial1, factorial2 } from '../factorial';

test('factorial1() works as expected', () => {
  expect(factorial1(3)).toBe(6);
  expect(factorial1(4)).toBe(24);
  expect(factorial1(5)).toBe(120);
});
test('factorial2() works as expected', () => {
  expect(factorial2(3)).toBe(6);
  expect(factorial2(4)).toBe(24);
  expect(factorial2(5)).toBe(120);
});
