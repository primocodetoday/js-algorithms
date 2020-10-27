import { Node } from '../Node';

it('Creates Node properly', () => {
  const newNode = new Node(5);

  expect(newNode.value).toBe(5);
  expect(newNode.next).toBe(null);
  expect(newNode.prev).toBe(null);
});
