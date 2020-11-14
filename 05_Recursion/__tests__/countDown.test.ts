import { countDown } from '../countDown';

test('countDown() works as expected', () => {
  console.log = jest.fn();

  countDown(99);

  expect(console.log).toHaveBeenCalledTimes(100);
});
