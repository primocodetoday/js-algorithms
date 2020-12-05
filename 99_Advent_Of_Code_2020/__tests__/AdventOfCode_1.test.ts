import { findSumOf2andMultiply, findSumOf3andMultiply } from '../AdventOfCode_1';
import { input } from '../inputs/input1';

it('findSumOf2 works fine and return the number', () => {
  expect(findSumOf2andMultiply(input, 2020)).toBe(224436);
});

it('findSumOf3 works fine and return the number', () => {
  expect(findSumOf3andMultiply(input, 2020)).toBe(303394260);
});
