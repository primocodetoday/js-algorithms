import { fib } from '../fib';

// 1 + 1 + 2 + 3 + 5 + 8;

test('fib() works as expected', () => {
  expect(fib(4)).toBe(3);
  expect(fib(10)).toBe(55);
  expect(fib(28)).toBe(317811);
  expect(fib(35)).toBe(9227465);
});
