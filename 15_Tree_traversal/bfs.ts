import { BinarySearchTree } from '../14_Binary_Search_Trees/BinarySearchTree';
import { Node } from '../14_Binary_Search_Trees/Node';

export const bfs = (tree: BinarySearchTree) => {
  let node: Node;
  if (tree.root) {
    node = tree.root;
  } else {
    return undefined;
  }

  let data: number[] = [];
  let queue: Node[] = [];

  queue.push(node);

  while (queue.length) {
    node = queue.shift()!;
    data.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return data;
};
