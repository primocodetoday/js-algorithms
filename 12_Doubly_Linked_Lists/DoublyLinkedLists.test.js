import { Node } from './Node';
import { DoublyLinkedList } from './DoublyLinkedLists';

describe('DoublyLinkedList Class works properly', () => {
  it('and creates new List', () => {
    const list = new DoublyLinkedList();

    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('and Pop method works fine', () => {
    const list = new DoublyLinkedList();

    list.push(5);
    expect(list.length).toBe(1);
    expect(list.head).toEqual({ value: 5, next: null, prev: null });
    expect(list.tail).toEqual({ value: 5, next: null, prev: null });

    list.push(10);
    expect(list.length).toBe(2);
    expect(list.head.value).toEqual(5);
    expect(list.tail.value).toEqual(10);
  });
});
