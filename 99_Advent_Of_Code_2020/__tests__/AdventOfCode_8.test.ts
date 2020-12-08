import { assembler } from '../AdventOfCode_8';
import { input } from '../inputs/input8';

it('assember works fine and return number', () => {
  expect(assembler(input)).toBe(1654);
});
