import { sameFrequency } from '../sameFrequency';

test('sameFrequency() works as expected', () => {
  expect(sameFrequency(182, 281)).toBeTruthy();
  expect(sameFrequency(34, 14)).toBeFalsy();
  expect(sameFrequency(3589578, 5879385)).toBeTruthy();
  expect(sameFrequency(22, 222)).toBeFalsy();
});
