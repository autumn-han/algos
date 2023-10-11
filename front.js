class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL1 {
  constructor() {
    this.head = null;
  }
  // ADD FRONT
  addFront(val) {
    // creating a new Node object
    let new_node = new Node(val);
    // check to see if the current list does not have a head node (i.e. the list is empty)
    if (!this.head) {
      // if the list is empty ---> place the new Node as the head
      this.head = new_node;
      return this;
    }
    // otherwise ---> assign the head to be the next node to the new Node
    new_node.next = this.head;
    // then assign the new_node to be the new head of the list
    this.head = new_node;
    return this;
  }
  // REMOVE FRONT
  removeFront() {
    if (!this.head) {
      return null;
    }
    let begone_head = this.head;
    this.head = begone_head.next;
    return this;
  }
  // FRONT
  front() {
    if (!this.head) {
      return null;
    }
    return this.head.data;
  }
  // DISPLAY
  display() {
    if (!this.head) {
      return null;
    }
    let runner = this.head;
    let string = "";
    while (runner !== null) {
      string = string + runner.data + ", ";
      runner = runner.next;
    }
    console.log(string);
  }
}

// TESTING
// var mySLL1 = new SLL1();
// mySLL1.addFront(18);
// mySLL1.addFront(5);
// mySLL1.addFront(73);
// console.log(mySLL1);

// mySLL1.removeFront();
// console.log(mySLL1);
// mySLL1.removeFront();
// console.log(mySLL1);

// console.log(mySLL1.front());

// mySLL1.display();
