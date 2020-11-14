import { Node } from '../Node';
import { Stack } from '../Stack';

describe('Stack Class works properly', () => {
  let list: Stack;

  beforeEach(() => {
    list = new Stack();
  });

  it('and creates new Stack', () => {
    expect(list.first).toBe(null);
    expect(list.last).toBe(null);
    expect(list.size).toBe(0);
  });

  it('and push(value) works fine', () => {
    list.push('5');

    expect(list.size).toBe(1);
    expect(list.first!.value).toBe('5');
    expect(list.last!.value).toBe('5');

    list.push('10');
    expect(list.size).toBe(2);
    expect(list.first!.value).toBe('10');
    expect(list.last!.value).toBe('5');

    list.push('15');
    expect(list.size).toBe(3);
    expect(list.first!.value).toBe('15');
    expect(list.last!.value).toBe('5');
  });

  it('and pop() works fine', () => {
    list.push('5');
    list.push('10');
    list.push('15');

    list.pop();
    expect(list.size).toBe(2);
    expect(list.last!.value).toBe('5');

    list.pop();
    expect(list.size).toBe(1);
    expect(list.first!.next).toBe(null);

    list.pop();
    expect(list.first).toBe(null);
    expect(list.last).toBe(null);

    expect(list.pop()).toBe(null);
  });
});
