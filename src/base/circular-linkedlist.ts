class Node {
  public data: number;
  public left: Node | null = null;
  public right: Node | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

class LinkedList {
  public head: Node | null = null;

  insert(item: number) {
    const node = new Node(item);

    if (!this.head) {
      this.head = node;
      this.head.left = node;
      this.head.right = node;
      return;
    }

    let currentNode = this.head;
    while (currentNode.right !== this.head) {
      currentNode = currentNode.right;
    }

    node.left = currentNode;
    node.right = this.head;

    this.head.left = node;
    currentNode.right = node;
  }

  insertAtFirst(item: number) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.head.left = node;
      this.head.right = node;
      return;
    }

    node.left = this.head.left;
    node.right = this.head;

    this.head.left.right = node;
    this.head.left = node;
    this.head = node;
  }

  display() {
    const data = [];
    let currentNode = this.head;

    while (currentNode.right !== this.head) {
      data.push(currentNode.data);
      currentNode = currentNode.right;
    }

    data.push(currentNode.data);

    console.log(data.join(" -> "));
  }
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insertAtFirst(0);

list.display();
