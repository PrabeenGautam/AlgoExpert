class Node {
  public data: number;
  public next: Node | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  public head: Node = null;

  insert(item: number) {
    const node = new Node(item);

    if (this.head === null) {
      this.head = node;
      return;
    }

    let tempNode = this.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }

    tempNode.next = node;
  }

  insertAsFirstNode(item: number) {
    const node = new Node(item);
    node.next = this.head;
    this.head = node;
  }

  insertAsLastNode(item: number) {
    const node = new Node(item);
    let temp = this.head;

    while (temp.next != null) {
      temp = temp.next;
    }

    temp.next = node;
  }

  insertAtKPosition(item: number, position: number) {
    const node = new Node(item);
    let currentPosition = 1;
    let temp = this.head;

    if (position == 1) {
      node.next = this.head;
      this.head = node;
      return;
    }

    while (currentPosition !== position - 1) {
      if (!temp.next) {
        console.log("Out of bound");
        break;
      }
      temp = temp.next;
      currentPosition++;
    }

    node.next = temp.next;
    temp.next = node;
  }

  insertBeforeNode(data: number, nodeData: number) {
    const node = new Node(data);
    let temp = this.head;
    let previous: Node = null;

    while (temp.data !== nodeData && temp.next !== null) {
      previous = temp;
      temp = temp.next;
    }

    if (temp.next === null) console.log("No Data found");
    previous.next = node;
    node.next = temp;
  }

  insertAfterNode(data: number, nodeData: number) {
    const node = new Node(data);
    let temp = this.head;

    while (temp.data !== nodeData && temp.next !== null) {
      temp = temp.next;
    }

    if (temp.next === null) console.log("No Data found");
    node.next = temp.next;
    temp.next = node;
  }

  deleteFromFirst() {
    if (this.head === null) {
      console.log("List is empty. Nothing to delete.");
      return null;
    }

    this.head = this.head.next;
  }

  deleteFromLast() {
    let temp = this.head;
    let previous: Node = null;

    while (temp.next) {
      previous = temp;
      temp = temp.next;
    }

    previous.next = null;
  }

  deleteFromKPos(position: number) {
    let current = 1;
    let temp = this.head;

    if (position === 0) {
      this.head = this.head.next;
      return;
    }

    while (current !== position - 1) {
      temp = temp.next;
      current++;
    }

    const next = temp.next;
    temp.next = next.next;
  }

  display(title?: string) {
    const data = [];
    let temp = this.head;
    while (temp !== null) {
      data.push(temp.data);
      temp = temp.next;
    }

    title && console.log(title);
    console.log(data.join(" -> ") + "\n");
  }
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

list.insertAsFirstNode(0);
list.insertAsLastNode(99);
list.insertAtKPosition(3.5, 5);
list.insertBeforeNode(4.5, 5);
list.insertAfterNode(6, 5);

list.display("Before Deleting");

list.deleteFromFirst();
list.deleteFromLast();
list.deleteFromKPos(3);
list.display("After Deleting");
