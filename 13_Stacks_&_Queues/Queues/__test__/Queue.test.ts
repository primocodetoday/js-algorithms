import { Queue } from '../Queue';

describe('Queue Class works properly', () => {
  let list: Queue;

  beforeEach(() => {
    list = new Queue();
  });

  it('and creates new Queue', () => {
    expect(list.first).toBe(null);
    expect(list.last).toBe(null);
    expect(list.size).toBe(0);
  });

  it('and enqueue(value) works fine', () => {
    list.enqueue('5');

    expect(list.size).toBe(1);
    expect(list.first!.value).toBe('5');
    expect(list.last!.value).toBe('5');

    list.enqueue('10');
    expect(list.size).toBe(2);
    expect(list.first!.value).toBe('5');
    expect(list.last!.value).toBe('10');

    list.enqueue('15');
    expect(list.size).toBe(3);
    expect(list.first!.value).toBe('5');
    expect(list.first!.next!.value).toBe('10');
    expect(list.last!.value).toBe('15');
  });

  it('and dequeue() works fine', () => {
    list.enqueue('5');
    list.enqueue('10');
    list.enqueue('15');

    list.dequeue();
    expect(list.size).toBe(2);
    expect(list.first!.value).toBe('10');
    expect(list.last!.value).toBe('15');

    list.dequeue();
    expect(list.size).toBe(1);
    expect(list.first!.next).toBe(null);

    list.dequeue();
    expect(list.first).toBe(null);
    expect(list.last).toBe(null);

    expect(list.dequeue()).toBe(null);
  });
});
