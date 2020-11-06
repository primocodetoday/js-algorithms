import { areThereDuplicates, areThereDuplicatesES6 } from '../areThereDuplicates';

test('areThereDuplicates() works as expected', () => {
  const test1 = [1, 2, 3];
  const test2 = [1, 2, 2];
  const test3 = ['a', 'b', 'c', 'a'];
  const test4 = ['f', 'b', 'c', 'a', 'a'];

  expect(areThereDuplicates(...test1)).toBeFalsy();
  expect(areThereDuplicates(...test2)).toBeTruthy();
  expect(areThereDuplicates(...test3)).toBeTruthy();
  expect(areThereDuplicates(...test4)).toBeTruthy();
});

test('areThereDuplicatesES6() works as expected', () => {
  const test1 = [1, 2, 3];
  const test2 = [1, 2, 2];
  const test3 = ['a', 'b', 'c', 'a'];
  const test4 = ['f', 'b', 'c', 'a', 'a'];

  expect(areThereDuplicatesES6(...test1)).toBeFalsy();
  expect(areThereDuplicatesES6(...test2)).toBeTruthy();
  expect(areThereDuplicatesES6(...test3)).toBeTruthy();
  expect(areThereDuplicatesES6(...test4)).toBeTruthy();
});
