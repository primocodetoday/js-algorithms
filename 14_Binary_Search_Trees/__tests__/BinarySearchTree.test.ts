import { BinarySearchTree } from '../BinarySearchTree';

describe('BinarySearchTree Class works properly', () => {
  let tree: BinarySearchTree;

  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  it('and creates new Tree', () => {
    expect(tree.root).toBe(null);
  });

  it('and insert(value) what is grater works fine', () => {
    tree.insert(10);

    expect(tree?.root?.value).toBe(10);

    tree.insert(15);
    expect(tree?.root?.right?.value).toBe(15);

    tree.insert(17);
    expect(tree?.root?.right?.right?.value).toBe(17);

    tree.insert(13);
    expect(tree?.root?.right?.left?.value).toBe(13);
  });

  it('and insert(value) what is smaller works fine', () => {
    tree.insert(10);

    expect(tree?.root?.value).toBe(10);

    tree.insert(5);
    expect(tree?.root?.left?.value).toBe(5);

    tree.insert(3);
    expect(tree?.root?.left?.left?.value).toBe(3);

    tree.insert(7);
    expect(tree?.root?.left?.right?.value).toBe(7);
  });

  it('and insert(value) return undefined when value is already in tree', () => {
    tree.insert(10);
    tree.insert(15);

    expect(tree.insert(15)).toBe(undefined);
  });

  it('and find(value) works properly', () => {
    expect(tree.find(74)).toBe(false);

    tree.insert(10);
    tree.insert(15);
    tree.insert(5);
    tree.insert(7);
    tree.insert(13);

    expect(tree.find(4)).toBe(false);
    expect(tree.find(9)).toBe(false);
    expect(tree.find(10)).toBe(true);
    expect(tree.find(5)).toBe(true);
    expect(tree.find(13)).toBe(true);
  });
});
