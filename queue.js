const Stack = require("./stack");
const stack = new Stack();

class _Node {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

function main() {
  let starTrek = new Queue();

  //   let newQueue = ["Kirk", "Spock", "Uhura", "Sulu", "Checkov"];
  //   newQueue.forEach(item => starTrek.enqueue(item));

  //   console.log(starTrek);

  function peek(q) {
    const node = q.first;
    return node;
  }
  //   console.log(peek(starTrek));

  function display(q) {
    while (q.first) {
      console.log(q.first.value);
      q.first = q.first.prev;
    }
  }
  //   display(starTrek);

  function removeSpock(q) {
    let first = q.first;
    q.dequeue();
    q.dequeue();
    q.enqueue(first.value);
    display(q);
  }
  //   removeSpock(starTrek);

  function twoStacks(q) {
    let stack1 = stack;
    let stack2 = stack;

    let newItems = [5, 6, 4, 7, 10];
    newItems.forEach(item => stack1.push(item));

    let newItems2 = [3, 9, 27, 34, 2];
    newItems2.forEach(item => stack2.push(item));

    q.enqueue(stack1);
    q.enqueue(stack2);
    return q;
  }
  // console.log(twoStacks(starTrek));

  function squareDancing(q) {
    let items = [
      "F Jane",
      "M Frank",
      "M John",
      "M Sherlock",
      "F Madonna",
      "M David",
      "M Christopher",
      "F Beyonce"
    ];
    let males = [];
    let females = [];
    items.forEach(item => {
      console.log(item);
      q.enqueue(item);
      if (item[0] === "F") {
        if (males.length !== 0) {
          console.log(`${item} is paired with ${males[0]}`);
          males.shift();
        } else {
          females = [...females, item];
        }
      }
      if (item[0] === "M") {
        if (females.length !== 0) {
          console.log(`${item} is paired with ${females[0]}`);
          females.shift();
        } else {
          males = [...males, item];
        }
      }
    });
  }
  //   console.log(squareDancing(starTrek));

  function ophidianBank() {
    let items = [
      "Jane",
      "Frank",
      "John",
      "Sherlock",
      "Madonna",
      "David",
      "Christopher",
      "Beyonce"
    ];

    let newItems = [];

    function checkFilter(str) {
      items.forEach(item => {
        if (item === str) {
          items = items.filter(newItem => newItem !== item);
        }
      });
      return items;
    }

    function removeLine() {
      for (let i = 0; i < items.length; i++) {
        let random = Math.floor(Math.random() * 4);
        if (random === 1) {
          console.log(items[i] + " does not have the proper paperwork");
        } else {
          newItems.push(items[i]);
          console.log(items[i] + " has left the building");
        }
      }
      newItems.forEach(item => {
        checkFilter(item);
      });
    }
    
    while (items.length > 0) {
        removeLine();
    }
  }

  console.log(ophidianBank());
}

main();
