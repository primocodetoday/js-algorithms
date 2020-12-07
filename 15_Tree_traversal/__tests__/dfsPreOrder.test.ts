import { BinarySearchTree } from '../../14_Binary_Search_Trees/BinarySearchTree';
import { dfsPreOrder } from '../dfsPreOrder';

describe('Deep search works properly', () => {
  let tree: BinarySearchTree;

  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  it('and return undefined when tree is empty', () => {
    expect(dfsPreOrder(tree)).toBe(undefined);
  });

  it('and return valid array', () => {
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
    expect(dfsPreOrder(tree)).toStrictEqual([10, 6, 3, 8, 15, 20]);
  });
});
