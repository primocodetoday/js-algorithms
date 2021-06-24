import { PriorityQueue } from '../PriorityQueue';

describe('Priority Queue Class works properly', () => {
  let queue: PriorityQueue;

  beforeEach(() => {
    queue = new PriorityQueue();
  });

  it('and insert element on the right spot', () => {
    queue.enqueue('buy potatoes', 1);
    expect(queue.values).toEqual([{ value: 'buy potatoes', priority: 1 }]);

    queue.enqueue('buy onions', 5);
    expect(queue.values).toEqual([
      { value: 'buy potatoes', priority: 1 },
      { value: 'buy onions', priority: 5 },
    ]);

    queue.enqueue('buy water', 7);
    expect(queue.values).toEqual([
      { value: 'buy potatoes', priority: 1 },
      { value: 'buy onions', priority: 5 },
      { value: 'buy water', priority: 7 },
    ]);

    queue.enqueue('buy oil', 4);
    expect(queue.values).toEqual([
      { value: 'buy potatoes', priority: 1 },
      { value: 'buy oil', priority: 4 },
      { value: 'buy water', priority: 7 },
      { value: 'buy onions', priority: 5 },
    ]);
  });

  it('and remove min element properly', () => {
    queue.enqueue('buy potatoes', 1);
    queue.enqueue('buy onions', 5);
    queue.enqueue('buy water', 7);
    queue.enqueue('buy oil', 4);

    queue.dequeue();
    expect(queue.values).toEqual([
      { value: 'buy oil', priority: 4 },
      { value: 'buy onions', priority: 5 },
      { value: 'buy water', priority: 7 },
    ]);

    queue.dequeue();
    expect(queue.values).toEqual([
      { value: 'buy onions', priority: 5 },
      { value: 'buy water', priority: 7 },
    ]);

    queue.dequeue();
    expect(queue.values).toEqual([{ value: 'buy water', priority: 7 }]);

    queue.dequeue();
    expect(queue.values).toEqual([]);
  });
});
