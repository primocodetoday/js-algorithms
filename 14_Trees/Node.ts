export class Node {
  value: string | number;
  left: Node | null;
  right: Node | null;

  constructor(value: string | number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
