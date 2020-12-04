import { validPasswords1, validPasswords2 } from '../AdventOfCode_4';
import { input } from '../inputs/input4';

it('counter works fine and return number of trees', () => {
  expect(validPasswords1(input)).toBe(216);
});

it('counter works fine and return number of trees', () => {
  expect(validPasswords2(input)).toBe(150);
});
