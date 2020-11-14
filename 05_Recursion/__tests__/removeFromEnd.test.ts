import { removeFromEnd1, removeFromEnd2 } from '../removeFromEnd';

test('removeFromEnd1() works as expected', () => {
  expect(removeFromEnd1('beeee!!!!!!!!!!!!!')).toBe('beeee');
});
test('removeFromEnd2() works as expected', () => {
  expect(removeFromEnd2('beeee!!!!!!!!!!!!!')).toBe('beeee');
});
