## BINARY HEAPS

Very similar to a binary search tree, but with some different rules!

In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes

### MAX BINARY HEAP
- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

#### INSERT PSEUDOCODE
1. Push the value into the values property on the heap
2. Bubble Up:
- Create a variable called index which is the length of the values property - 1
- Create a variable called parentIndex which is the floor of (index-1)/2
- Keep looping as long as the values element at the parentIndex is less than the values element at the child index
  - Swap the value of the values element at the parentIndex with the value of the element property at the child index
  - Set the index to be the parentIndex, and start over!