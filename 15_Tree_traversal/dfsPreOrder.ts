import { BinarySearchTree } from '../14_Binary_Search_Trees/BinarySearchTree';
import { Node } from '../14_Binary_Search_Trees/Node';

export const dfsPreOrder = (tree: BinarySearchTree) => {
  let data: number[] = [];

  if (!tree.root) {
    return undefined;
  }

  function traverse(node: Node) {
    data.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(tree.root);

  return data;
};
