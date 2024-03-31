class CircularQueue {
  #queue = [];
  #front = -1;
  #size = 5;
  #rear = -1;

  constructor(size?: number) {
    if (size) this.#size = size;
  }

  enqueue(item: number) {
    if (this.isFull) {
      console.log("Queue Overflow");
      return;
    }

    if (this.isEmpty) {
      this.#front = 0;
    }

    this.#rear = (this.#rear + 1) % this.#size;
    this.#queue[this.#rear] = item;
  }

  dequeue() {
    if (this.isEmpty) {
      return console.log("Queue Underflow");
    }

    const popped = this.#queue[this.#front];

    if (this.#front === this.#rear) {
      this.#front = -1;
      this.#rear = -1;
    } else {
      this.#front = (this.#front + 1) % this.#size;
    }

    console.log("Removed: ", popped);
  }

  get isEmpty() {
    return this.#front === -1 && this.#rear === -1;
  }

  get isFull() {
    return (this.#rear + 1) % this.#size === this.#front;
  }

  display() {
    console.log(this.#queue);
  }
}

const circularQueue = new CircularQueue(5);
circularQueue.enqueue(2);
circularQueue.enqueue(-1);
circularQueue.enqueue(5);
circularQueue.enqueue(6);
circularQueue.enqueue(7);
circularQueue.dequeue();
circularQueue.enqueue(4);

circularQueue.display();
