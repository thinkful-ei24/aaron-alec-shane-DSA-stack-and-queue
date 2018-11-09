class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function main() {
  let starTrek = new Stack();

  let newItems = [5, 6, 4, 7, 10];
  newItems.forEach(item => starTrek.push(item));

  // console.log(starTrek);

  function peek(s) {
    const node = s.top;
    return node;
  }
  // console.log(peek(starTrek));

  function remove(s) {
    let top = s.top;
    s.pop();
    s.pop();
    s.push(top);
  }
  //   remove(starTrek);

  //   console.log(starTrek);

  function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let count = s.length;
    let lower = 0;
    if (s[count - 1] === s[lower]) {
      let forward = "";
      let backward = "";
      for (let i = 0; i < s.length; i++) {
        forward = forward + s[i];
        backward = backward + s[s.length - 1 - i];
      }
      if (forward === backward) {
        return true;
      }
      return false;
    }
    return false;
  }
  // true, true, true
  //   console.log(is_palindrome("dad"));
  //   console.log(is_palindrome("A man, a plan, a canal: Panama"));
  //   console.log(is_palindrome("1001"));
  //   console.log(is_palindrome("asdfasdfas"));

  function matchingParentheses(s) {
    newString = s.toLowerCase();
    if (s[0] === ")") {
      return "There is a close parentheses in the first character";
    }
    let closeCount = 0;
    let openCount = 0;
    let location = [];
    let openLocation = [];
    for (let i = 0; i < newString.length; i++) {
      if (newString[i] === "(") {
        openCount++;
      }
      if (newString[i] === ")") {
        closeCount++;
      }
      if (closeCount > openCount) {
        location = [...location, i];
      }
      if (openCount - 1 >= closeCount) {
        openLocation = [...openLocation, i];
      }
      if (openCount === closeCount) {
        openLocation = [];
      }
    }

    if (closeCount > openCount) {
      return `There are too many close parentheses. The error is at character ${
        location[0]
      }`;
    }

    if (closeCount !== openCount) {
      return `The open and close parentheses do not match. You have an unclosed parentheses starting at ${
        openLocation[0]
      }`;
    }
    return true;
  }
  //   console.log(matchingParentheses('klsldjfl(())lksdfj'))

  const display = stack => {
    let current = stack.top;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  };

  function isEmpty(s) {
    return s.top === null;
  }

  function sortStack(unsorted) {
    // let newStack = new Stack();
    //     newStack = s;
    //     let count = 0;
    // while (newStack.top !== null) {
    //     newStack.pop();
    //     count++;
    // }
    //     console.log(s, newStack);
    //     let newArr = [];
    //     for (let i = 0; i < count; i++) {
    //         newArr = [...newArr, s.data];
    //     }
    //     return newArr;
    //   }


    const sorted = new Stack();

    while (!isEmpty(unsorted)) {
      let temp = peek(unsorted);
      unsorted.pop();

      while (!isEmpty(sorted) && temp > peek(sorted)) {
        unsorted.push(sorted.pop());
      }

      sorted.push(temp);
    }
    return sorted;
  }
  //   console.log(display(sortStack(starTrek)));

  const test_stack = new Stack();

  test_stack.push(5);
  test_stack.push(1);
  test_stack.push(3);
  test_stack.push(7);

  display(test_stack);
  display(sortStack(test_stack));
}

main();
