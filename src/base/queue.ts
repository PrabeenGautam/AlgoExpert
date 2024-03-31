class Queue<T> {
  #queue: T[] = [];
  #front = -1;
  #rear = -1;
  #size;

  constructor(size = 100) {
    this.#size = size;
  }

  enqueue(item: T) {
    if (this.isFull()) {
      return console.log("Queue is fulled");
    }

    if (this.#front === -1) {
      this.#front++;
    }

    this.#queue.push(item);
    this.#rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return console.log("Queue is empty");
    }

    const popped = this.#queue[this.#front];

    if (this.#front === this.#rear) {
      this.#front = -1;
      this.#rear = -1;
      return popped;
    }

    this.#front++;
    return popped;
  }

  peek() {
    if (this.isEmpty()) console.log("Peek: Queue is empty");
    return this.#queue[this.#front];
  }

  isEmpty() {
    return this.#front === -1 && this.#rear === -1;
  }

  isFull() {
    return this.#rear === this.#size - 1;
  }

  get size() {
    return this.#queue.length;
  }

  get queue() {
    if (this.#front === -1) return this.#queue.toString();
    return this.#queue.slice(this.#front);
  }
}

const queue = new Queue<number>(2);
queue.enqueue(2);
queue.enqueue(4);
queue.dequeue();

console.log(queue.peek());
