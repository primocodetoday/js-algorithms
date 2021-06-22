import {MaxBinaryHeap} from '../MaxBinaryHeap'

describe('MaxBinaryHeap Class works properly', () => {
  let heap: MaxBinaryHeap;

  beforeEach(() => {
    heap = new MaxBinaryHeap();
  });

  it('and insert element on the right spot', () => {

    const testData = [2,7,26,25,19,17,1,90,3,36]

    testData.forEach((el)=> {
      heap.insert(el)
    })

    expect(heap.values).toStrictEqual([90,36,17,25,26,7,1,2,3,19]);
  });
});
