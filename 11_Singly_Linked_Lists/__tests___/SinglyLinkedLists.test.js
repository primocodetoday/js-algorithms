import { SinglyLinkedList } from '../SinglyLinkedList';

const handleListTestPusher = (singlyLL) => {
  singlyLL.push('A');
  singlyLL.push('B');
  singlyLL.push('C');
  singlyLL.push('D');
  singlyLL.push('E');
};

describe('SinglyLinkedList Class constructor works properly', () => {
  it('and creates new empty List', () => {
    const list = new SinglyLinkedList();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.length).toBe(0);
  });
});

describe('SinglyLinkedList Class method: ', () => {
  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  it('push(value) works fine', () => {
    list.push('A');

    expect(list.length).toBe(1);
    expect(list.head.value).toBe('A');
    expect(list.tail.value).toBe('A');

    list.push('B');
    expect(list.length).toBe(2);
    expect(list.head.value).toBe('A');
    expect(list.tail.value).toBe('B');
  });

  it('pop() works fine', () => {
    handleListTestPusher(list);

    list.pop();
    expect(list.length).toBe(4);
    expect(list.tail.value).toBe('D');

    list.pop();
    list.pop();
    list.pop();
    expect(list.length).toBe(1);
    expect(list.head.next).toBe(null);

    list.pop();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);

    expect(list.pop()).toBe(undefined);
  });

  it('shift() works fine', () => {
    handleListTestPusher(list);

    list.shift();
    expect(list.length).toBe(4);
    expect(list.head.value).toBe('B');

    list.shift();
    list.shift();
    list.shift();
    expect(list.head.next).toBe(null);

    list.shift();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);

    expect(list.shift()).toBe(undefined);
  });

  it('unshift(value) works fine', () => {
    list.unshift(5);
    expect(list.head.value).toBe(5);

    handleListTestPusher(list);

    expect(list.tail.value).toBe('E');

    list.unshift(10);
    expect(list.head.value).toBe(10);
    expect(list.head.next.value).toBe(5);
  });

  it('get(index) works fine', () => {
    // edge case
    expect(list.get(1)).toBe(null);
    expect(list.get(-1)).toBe(null);

    handleListTestPusher(list);

    expect(list.get(0)).toMatchObject({ value: 'A' });
    expect(list.get(4)).toMatchObject({ value: 'E' });
  });

  it('set(index,value) works fine', () => {
    expect(list.set(0, 1)).toBe(false);

    handleListTestPusher(list);

    expect(list.set(0, 'a')).toBe(true);
    expect(list.get(0)).toMatchObject({ value: 'a' });

    expect(list.set(4, 'e')).toBe(true);
    expect(list.get(4)).toMatchObject({ value: 'e' });
  });

  it('insert(index,value) works fine', () => {
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
    expect(list.head.next.next.next.value).toBe('B');
    expect(list.tail.value).toBe('b');
  });

  it('remove(index) works fine', () => {
    expect(list.remove(-1)).toBe(undefined);
    expect(list.remove(3)).toBe(undefined);

    handleListTestPusher(list);
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
  });

  it('reverse() works fine', () => {
    handleListTestPusher(list);
    list.push('F');

    list.reverse();

    expect(list.tail.next).toBeNull();
    expect(list.tail.value).toBe('A');
    expect(list.head.value).toBe('F');
    expect(list.head.next.value).toBe('E');
  });
});
