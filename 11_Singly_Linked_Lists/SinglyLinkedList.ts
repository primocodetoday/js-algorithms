﻿import { Node } from './Node';

export class SinglyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: string) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
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

  unshift(value: string) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current!.next;
      counter++;
    }
    return current;
  }

  set(index: number, value: string) {
    const currentNode = this.get(index);
    if (currentNode) {
      currentNode.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: string) {
    const newNode = new Node(value);
    const nextNode = this.get(index);
    const prevNode = this.get(index - 1);

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
    prevNode!.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(index: number) {
    const prevNode = this.get(index - 1);
    const nextNode = this.get(index + 1);
    const removeNode = this.get(index);

    switch (true) {
      case index < 0 || index >= this.length:
        return undefined;
      case index === this.length - 1:
        return this.pop();
      case index === 0:
        return this.shift();
      default:
    }
    prevNode!.next = nextNode;
    this.length--;
    return removeNode;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let prevNode = null;
    let nextNode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode!.next;
      currentNode!.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }
}
