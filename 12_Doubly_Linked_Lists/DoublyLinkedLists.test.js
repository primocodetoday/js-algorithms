import { Node } from './Node';
import { DoublyLinkedList } from './DoublyLinkedLists';

jest.mock('./Node.js');

describe('DoublyLinkedList Class works properly', () => {
  it('and creates new List', () => {
    const list = new DoublyLinkedList();

    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });
});
