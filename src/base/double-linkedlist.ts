class Node {
  public data;
  public left: Node | null = null;
  public right: Node | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

class DLL {
  public head: Node | null = null;

  insert(item: number) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
      return;
    }

    let temp = this.head;
    while (temp.right) {
      temp = temp.right;
    }

    temp.right = node;
    node.left = temp;
  }

  insertAtFirst(item: number) {
    const node = new Node(item);

    if (this.head) {
      node.right = this.head;
      this.head.left = node;
    }

    this.head = node;
  }

  insertAtKPos(item: number, pos: number) {
    const node = new Node(item);
    let current = 0;

    if (pos === 0) {
      this.insertAtFirst(item);
      return;
    }

    let temp = this.head;
    while (current < pos && temp.right) {
      temp = temp.right;
      current++;
    }

    if (!temp.right) {
      console.log("Out of bound");
      return;
    }

    const previous = temp.left;

    node.right = temp;
    node.left = previous;

    previous.right = node;
    temp.left = node;
  }

  deleteFirst() {
    if (!this.head) {
      console.log("List is Empty");
      return;
    }

    if (this.head.right) this.head.right.left = null;
    this.head = this.head.right;
  }

  deleteFromLast() {
    if (!this.head) {
      console.log("List is Empty");
      return;
    }

    let temp = this.head;
    while (temp.right) {
      temp = temp.right;
    }

    if (!temp.left) {
      this.head = null;
    } else {
      temp.left.right = null;
    }
  }

  deleteFromKPos(pos: number) {
    if (!this.head) {
      console.log("List is Empty");
      return;
    }

    let current = 0;
    let temp = this.head;

    while (current < pos && temp) {
      temp = temp.right;
      current++;
    }

    if (!temp) {
      console.log("Out of bound");
      return;
    }

    // Delete first data
    if (!temp.left) {
      this.head = temp.right;
      if (temp.right) temp.right.left = null;
      return;
    }

    // Delete last data
    if (!temp.right) {
      temp.left.right = null;
      return;
    }

    temp.left.right = temp.right;
    temp.right.left = temp.left;
  }

  display(title?: string) {
    const data = [];
    let temp = this.head;
    while (temp !== null) {
      data.push(temp.data);
      temp = temp.right;
    }

    title && console.log(title);
    console.log(data.join(" -> ") + "\n");
  }
}

const list = new DLL();

list.insert(1);
list.insert(3);
list.insert(4);
list.insertAtFirst(0);
list.insertAtKPos(2, 2);

list.display("Before Deleting");

list.deleteFirst();
list.deleteFromLast();
list.deleteFromKPos(2);

list.display("After deleting");
