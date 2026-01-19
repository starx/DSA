import { dprint, run_test, TestCases } from "../test_runner"
import { Node } from "../linked_list"

class ReverseList<T> {
    sol1_iterative(head: Node<T>|null): Node<T> {
        let previousNode: Node<T>|null = null;
        while(head) {
            const nextNode = head.next;
            head.next = previousNode;
            previousNode = head;
            head = nextNode;
        }

        if(!previousNode) {
            throw Error("Previous node is null");
        }
        return previousNode;
    }

    sol2_recursive(head: Node<T>|null, previousNode: Node<T>|null = null): Node<T> {
        if(head) {
            const nextNode = head.next;  
            head.next = previousNode;
            return this.sol2_recursive(nextNode, head)
        }
        if(!previousNode) {
            throw Error("Previous node is null");
        }
        return previousNode;
    }
}

// Test cases
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const x = new Node("x");
const y = new Node("y");
x.next = y;

const p = new Node("p");

const testCases: TestCases = {
  test_00: {
    input: [a],
    expected: f,
  },
  test_01: {
    input: [x],
    expected: y,
  },
  test_02: {
    input: [p],
    expected: p,
  },
};

run_test(
    new ReverseList(),
    "sol1_iterative",
    testCases,
    false
)