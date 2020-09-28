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

  pop() {
    if (!this.head) return undefined;
    let pivot = this.head;
    let newTail = pivot;

    while (pivot.next) {
      newTail = pivot;
      pivot = pivot.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return pivot;
  }

  shift() {
    if (!this.head) return undefined;

    const temp = this.head;
    this.head = temp.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
}

const list = new SinglyLinkedList();
list.push("I'm");
list.push('a');
list.push('Singly');
list.push('Linked');
list.push('List');
