export class Node {
  value: string;
  next: Node | null;
  prev: Node | null;

  constructor(value: string) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
