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

    let newItems = ['Kirk', 'Spock', 'McCoy', 'Scotty'];
    newItems.forEach(item => starTrek.push(item));

    console.log(starTrek);
}

main();