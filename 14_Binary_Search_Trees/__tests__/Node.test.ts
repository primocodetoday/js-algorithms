import { Node } from '../Node';

it('Creates Node properly', () => {
  const newNode = new Node(5);

  expect(newNode.value).toBe(5);
  expect(newNode.right).toBe(null);
  expect(newNode.left).toBe(null);
});
