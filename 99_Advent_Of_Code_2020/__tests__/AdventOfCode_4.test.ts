import { validPasswords1, validPasswords2 } from '../AdventOfCode_4';
import { input } from '../inputs/input4';

it('validPasswords1 works fine', () => {
  expect(validPasswords1(input)).toBe(216);
});

it('validPasswords2 works fine', () => {
  expect(validPasswords2(input)).toBe(150);
});
