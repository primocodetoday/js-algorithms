import { MaxBinaryHeap } from '../MaxBinaryHeap';

describe('MaxBinaryHeap Class works properly', () => {
  let heap: MaxBinaryHeap;

  beforeEach(() => {
    heap = new MaxBinaryHeap();
  });

  it('and insert element on the right spot', () => {
    const testData = [2, 7, 26, 25, 19, 17, 1, 90, 3, 36];

    testData.forEach((el) => {
      heap.insert(el);
    });

    expect(heap.values).toStrictEqual([90, 36, 17, 25, 26, 7, 1, 2, 3, 19]);
  });

  it('and remove max element properly', () => {
    const testData = [2, 7, 26, 25, 19, 17, 1, 90, 3, 36];

    testData.forEach((el) => {
      heap.insert(el);
    });

    heap.extractMax();
    expect(heap.values).toStrictEqual([36, 26, 17, 25, 19, 7, 1, 2, 3]);

    heap.extractMax();
    expect(heap.values).toStrictEqual([26, 25, 17, 3, 19, 7, 1, 2]);

    heap.extractMax();
    expect(heap.values).toStrictEqual([25, 19, 17, 3, 2, 7, 1]);

    heap.extractMax();
    expect(heap.values).toStrictEqual([19, 3, 17, 1, 2, 7]);

    heap.extractMax();
    expect(heap.values).toStrictEqual([17, 3, 7, 1, 2]);

    heap.extractMax();
    expect(heap.values).toStrictEqual([7, 3, 2, 1]);

    heap.extractMax();
    expect(heap.values).toStrictEqual([3, 1, 2]);

    heap.extractMax();
    expect(heap.values).toStrictEqual([2, 1]);

    heap.extractMax();
    expect(heap.values).toStrictEqual([1]);

    heap.extractMax();
    expect(heap.values).toStrictEqual([]);
  });
});
