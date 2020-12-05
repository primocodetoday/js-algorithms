import { findHighestPlace, findMyPlace } from '../AdventOfCode_5';
import { input } from '../inputs/input5';

it('findHighestPlace works fine and return highest seatID', () => {
  expect(findHighestPlace(input)).toBe(953);
});

it('findMyPlace works fine and return empty placeID', () => {
  expect(findMyPlace(input)).toBe(615);
});
