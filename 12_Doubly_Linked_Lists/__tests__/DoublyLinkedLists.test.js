import { DoublyLinkedList } from '../DoublyLinkedLists';

describe('DoublyLinkedList Class works properly', () => {
  it('and creates new List', () => {
    const list = new DoublyLinkedList();

    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('and push(value) works fine', () => {
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

  it('and unshift(value) works fine', () => {
    const list = new DoublyLinkedList();

    list.unshift(5);
    expect(list.head.value).toBe(5);
    expect(list.tail.value).toBe(5);

    list.unshift(10);
    expect(list.head.value).toBe(10);
    expect(list.head.next.value).toBe(5);
    expect(list.tail.prev.value).toBe(10);
  });

  it('and get(index) works fine', () => {
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

  it('and set(index,value) works fine', () => {
    const list = new DoublyLinkedList();

    expect(list.set(0, 1)).toBe(false);

    list.push('A');
    list.push('B');
    list.push('C');
    list.push('D');
    list.push('E');

    expect(list.set(0, 'a')).toBe(true);
    expect(list.get(0)).toMatchObject({ value: 'a' });

    expect(list.set(4, 'e')).toBe(true);
    expect(list.get(4)).toMatchObject({ value: 'e' });
  });

  it('and insert(index,value) works fine', () => {
    const list = new DoublyLinkedList();

    expect(list.insert(-1, 'A')).toBe(false);
    expect(list.insert(3, 'A')).toBe(false);

    list.push('A');
    list.push('B');

    expect(list.insert(2, 'b')).toBe(true);

    expect(list.insert(0, 'a')).toBe(true);

    expect(list.insert(1, '$')).toBe(true);

    // should be a<->$<->A<->B<->b at the end
    expect(list.get(0)).toMatchObject({ value: 'a' });
    expect(list.get(1)).toMatchObject({ value: '$' });
    expect(list.get(2)).toMatchObject({ value: 'A' });
    expect(list.get(3)).toMatchObject({ value: 'B' });
    expect(list.get(4)).toMatchObject({ value: 'b' });

    // testing connections
    expect(list.head.value).toBe('a');
    expect(list.head.next.value).toBe('$');
    expect(list.head.next.next.value).toBe('A');
    expect(list.tail.value).toBe('b');
    expect(list.tail.prev.value).toBe('B');
    expect(list.tail.prev.prev.value).toBe('A');
  });

  it('and remove(index) works fine', () => {
    const list = new DoublyLinkedList();

    expect(list.remove(-1)).toBe(undefined);
    expect(list.remove(3)).toBe(undefined);

    list.push('A');
    list.push('B');
    list.push('C');
    list.push('D');
    list.push('E');
    list.push('F');

    expect(list.remove(5)).toMatchObject({ value: 'F' });
    expect(list.remove(0)).toMatchObject({ value: 'A' });

    expect(list.remove(2)).toMatchObject({ value: 'D' });

    // should be B<->C<->E at the end
    expect(list.get(0)).toMatchObject({ value: 'B' });
    expect(list.get(1)).toMatchObject({ value: 'C' });
    expect(list.get(2)).toMatchObject({ value: 'E' });

    // testing connections
    expect(list.head.value).toBe('B');
    expect(list.head.next.value).toBe('C');
    expect(list.head.next.next.value).toBe('E');
    expect(list.tail.value).toBe('E');
    expect(list.tail.prev.value).toBe('C');
    expect(list.tail.prev.prev.value).toBe('B');
  });
});
