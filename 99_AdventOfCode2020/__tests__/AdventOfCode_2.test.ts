import { numberOfValidPasswords1, numberOfValidPasswords2 } from '../AdventOfCode_2';
import { input } from '../inputs/input2';

it('numberOfValidPasswords1 works fine and return number of passwords', () => {
  expect(numberOfValidPasswords1(input)).toBe(396);
});

it('numberOfValidPasswords2 works fine and return number of passwords', () => {
  expect(numberOfValidPasswords2(input)).toBe(428);
});
