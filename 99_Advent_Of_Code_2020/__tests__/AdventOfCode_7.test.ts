import { countBags1, countBags2 } from '../AdventOfCode_7';
import { input } from '../inputs/input7';

it('countBags1 works fine and return number', () => {
  expect(countBags1(input)).toBe(142);
});

it('countBags2 works fine and return number', () => {
  expect(countBags2(input)).toBe(10219);
});
