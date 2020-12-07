import { BinarySearchTree } from '../14_Binary_Search_Trees/BinarySearchTree';
import { Node } from '../14_Binary_Search_Trees/Node';

export const dfsInOrder = (tree: BinarySearchTree) => {
  let data: number[] = [];

  if (!tree.root) {
    return undefined;
  }

  function traverse(node: Node) {
    if (node.left) traverse(node.left);
    data.push(node.value);
    if (node.right) traverse(node.right);
  }

  traverse(tree.root);

  return data;
};
