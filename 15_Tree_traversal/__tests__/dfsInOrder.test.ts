import { BinarySearchTree } from '../../14_Binary_Search_Trees/BinarySearchTree';
import { dfsInOrder } from '../dfsInOrder';

describe('Deep search works properly', () => {
  let tree: BinarySearchTree;

  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  it('and return undefined when tree is empty', () => {
    expect(dfsInOrder(tree)).toBe(undefined);
  });

  it('and return valid array', () => {
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
    expect(dfsInOrder(tree)).toStrictEqual([3, 6, 8, 10, 15, 20]);
  });
});
