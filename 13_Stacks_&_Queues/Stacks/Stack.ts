import { Node } from './Node';

export class Stack {
  first: Node | null = null;
  last: Node | null = null;
  size: number = 0;

  push(value: string) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let storedFirst = this.first;
      this.first = newNode;
      this.first.next = storedFirst;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    const storedFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return storedFirst.value;
  }
}
