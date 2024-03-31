class Stack<T> {
  #tos: number;
  #maxLength: number;

  public stack: T[];

  constructor(maxLength = 1000) {
    this.stack = [];
    this.#tos = -1;
    this.#maxLength = maxLength;
  }

  push(item: T) {
    if (this.isFull()) throw new Error("Stack Overflow");
    this.stack.push(item);
    this.#tos++;
  }

  pop(): T | undefined {
    if (this.isEmpty()) throw new Error("Stack Underflow");
    this.#tos--;
    return this.stack.pop();
  }

  isEmpty() {
    return this.#tos === -1;
  }

  isFull() {
    return this.stack.length === this.#maxLength;
  }

  peek() {
    return this.stack[this.#tos];
  }

  clear() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }
}

const stack = new Stack<number>(8);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(4);

stack.clear();
console.log(stack);
