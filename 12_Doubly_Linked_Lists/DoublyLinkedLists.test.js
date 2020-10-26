import { DoublyLinkedList } from './DoublyLinkedLists';

describe('DoublyLinkedList Class works properly', () => {
  it('and creates new List', () => {
    const list = new DoublyLinkedList();

    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('and push() works fine', () => {
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

  it('and pop() works fine', () => {
    const list = new DoublyLinkedList();

    list.push(5);
    list.push(10);
    list.push(15);

    list.pop();
    expect(list.length).toBe(2);
    expect(list.tail.value).toBe(10);

    list.pop();
    expect(list.head.next).toBe(null);
    expect(list.tail.prev).toBe(null);

    list.pop();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);

    expect(list.pop()).toBe(undefined);
  });

  it('and shift() works fine', () => {
    const list = new DoublyLinkedList();

    list.push(5);
    list.push(10);
    list.push(15);

    list.shift();
    expect(list.length).toBe(2);
    expect(list.head.value).toBe(10);
    expect(list.head.prev).toBe(null);

    list.shift();
    expect(list.head.next).toBe(null);
    expect(list.tail.prev).toBe(null);

    list.shift();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);

    expect(list.shift()).toBe(undefined);
  });

  it('and unshift() works fine', () => {
    const list = new DoublyLinkedList();

    list.unshift(5);
    expect(list.head.value).toBe(5);
    expect(list.tail.value).toBe(5);

    list.unshift(10);
    expect(list.head.value).toBe(10);
    expect(list.head.next.value).toBe(5);
    expect(list.tail.prev.value).toBe(10);
  });

  it('and get() works fine', () => {
    const list = new DoublyLinkedList();

    // edge case
    expect(list.get(1)).toBe(null);
    expect(list.get(-1)).toBe(null);

    list.push('A');
    list.push('B');
    list.push('C');
    list.push('D');
    list.push('E');

    expect(list.get(0)).toMatchObject({ value: 'A' });
    expect(list.get(4)).toMatchObject({ value: 'E' });
  });
});
