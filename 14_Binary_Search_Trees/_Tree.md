# Tree

A data structure that consists of nodes in a parent / child relationship

- Root - The top node in a tree.
- Child -A node directly connected to another node when moving away from the Root.
- Parent - The converse notion of a child.
- Siblings -A group of nodes with the same parent.
- Leaf - A node with no children.
- Edge - The connection between one node and another.

## Kinds of Trees

- Trees
- Binary Trees
- Binary Search Trees

## How BST Work

- Every parent node has at most two children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater than the parent

#### INSERTING A NODE

Steps - Iteratively or Recursively

Create a new node
Starting at the root

1. Check if there is a root, if not - the root now becomes that new node!
2. If there is a root, check if the value of the new node is greater than or less than the value of the root
3. - If it is greater
   - Check to see if there is a node to the right
   - If there is, move to that node and repeat these steps
   - If there is not, add that node as the right property

- If it is less
  - Check to see if there is a node to the left
  - If there is, move to that node and repeat these steps
  - If there is not, add that node as the left property

#### Finding a Node in a BST

Steps - Iteratively or Recursively

Starting at the root

1. Check if there is a root, if not - we're done searching!
2. If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
3. If not, check to see if the value is greater than or less than the value of the root
4. If it is greater
   - Check to see if there is a node to the right
   - If there is, move to that node and repeat these steps
   - If there is not, we're done searching!

- If it is less
  - Check to see if there is a node to the left
  - If there is, move to that node and repeat these steps
  - If there is not, we're done searching!
