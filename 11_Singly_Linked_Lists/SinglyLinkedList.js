class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// The bad way
// const first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('ya !!');

class SinglyLinkedList {
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("I'm");
list.push('a');
list.push('Singly');
list.push('Linked');
list.push('List');
