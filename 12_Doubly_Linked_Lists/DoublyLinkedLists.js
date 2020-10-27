import { Node } from './Node';

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const popped = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;

    return popped;
  }

  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    if (index <= this.length / 2) {
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }

    return current;
  }

  set(index, value) {
    const currentNode = this.get(index);
    if (currentNode) {
      currentNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    switch (true) {
      case index < 0 || index > this.length:
        return false;
      case index === this.length:
        // !! makes return boolean
        return !!this.push(value);
      case index === 0:
        return !!this.unshift(value);
      default:
    }

    const newNode = new Node(value);

    const nextNode = this.get(index);
    const prevNode = nextNode.prev;

    prevNode.next = newNode;
    nextNode.prev = newNode;
    newNode.next = nextNode;
    newNode.prev = prevNode;

    this.length++;
    return true;
  }

  remove(index) {
    switch (true) {
      case index < 0 || index >= this.length:
        return undefined;
      case index === this.length - 1:
        return this.pop(index);
      case index === 0:
        return this.shift();
      default:
    }

    const removeNode = this.get(index);
    const prevNode = removeNode.prev;
    const nextNode = removeNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removeNode.next = null;
    removeNode.prev = null;

    this.length--;
    return removeNode;
  }

  // reverse() {
  //   let currentNode = this.head;
  //   this.head = this.tail;
  //   this.tail = currentNode;

  //   let prevNode = null;
  //   let nextNode = null;

  //   for (let i = 0; i < this.length; i++) {
  //     nextNode = currentNode.next;
  //     currentNode.next = prevNode;
  //     prevNode = currentNode;
  //     currentNode = nextNode;
  //   }
  // }
}
