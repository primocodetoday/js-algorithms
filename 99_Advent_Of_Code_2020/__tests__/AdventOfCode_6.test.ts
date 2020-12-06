import { countAnswers1, countAnswers2 } from '../AdventOfCode_6';
import { input } from '../inputs/input6';

it('countAnswers1 works fine and return number', () => {
  expect(countAnswers1(input)).toBe(6437);
});

it('countAnswers2 works fine and return number', () => {
  expect(countAnswers2(input)).toBe(3229);
});
