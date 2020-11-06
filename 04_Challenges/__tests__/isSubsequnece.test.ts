import { isSubsequence } from '../isSubsequence';

test('isSubsequence() works as expected', () => {
  expect(isSubsequence('hello', 'hello World')).toBeTruthy();
  expect(isSubsequence('sing', 'sting')).toBeTruthy();
  expect(isSubsequence('abc', 'abracadabra')).toBeTruthy();
  expect(isSubsequence('abc', 'acb')).toBeFalsy();
});
