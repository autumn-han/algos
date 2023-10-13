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
  // CONTAINS
  contains(value) {
    if (!this.head) {
      return null;
    }
    let here = false;
    let runner = this.head;
    while (runner !== null) {
      if (runner.data === value) {
        here = true;
      }
      runner = runner.next;
    }
    return here;
  }
  // LENGTH
  length() {
    if (!this.head) {
      return null;
    }
    let count = 0;
    let runner = this.head;
    while (runner !== null) {
      count++;
      runner = runner.next;
    }
    return count;
  }
  // MAX / MIN / AVG
  maxMinAvg() {
    if (!this.head) {
      return null;
    }
    let answer = "";
    let avg = 0;
    let sum = 0;
    let max = this.head.data;
    let min = this.head.data;
    let runner = this.head;
    while (runner !== null) {
      sum += runner.data;
      if (runner.data < min) {
        min = runner.data;
      } else if (runner.data > max) {
        max = runner.data;
      }
      runner = runner.next;
    }
    avg = sum / this.length();
    answer = "max: " + max + ", min: " + min + ", average: " + avg;
    return answer;
  }
}

// TESTING
var mySLL1 = new SLL1();
mySLL1.addFront(18);
mySLL1.addFront(5);
mySLL1.addFront(73);
console.log(mySLL1);

// mySLL1.removeFront();
// console.log(mySLL1);
// mySLL1.removeFront();
// console.log(mySLL1);

// console.log(mySLL1.front());

// mySLL1.display();

// console.log(mySLL1.contains(18));
// console.log(mySLL1.contains(12));

// console.log(mySLL1.length());

// console.log(mySLL1.maxMinAvg());
