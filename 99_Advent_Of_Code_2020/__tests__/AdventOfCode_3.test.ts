import { counterTrees, counterSlopes } from '../AdventOfCode_3';
import { input } from '../inputs/input3';

it('counter works fine and return number of trees', () => {
  expect(counterTrees(input)).toBe(164);
});

it('counter works fine and return number of trees', () => {
  expect(counterSlopes(input)).toBe(5007658656);
});
