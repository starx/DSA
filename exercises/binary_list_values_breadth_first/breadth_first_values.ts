import { Node } from "../binary_tree_ts";
import { run_test, TestCases } from "../test_runner";

class BreadthFirstValues<T> {
  // naive queue (O(n^2) due to shift)
  sol1_iterative(root: Node<T> | null): T[] {
    const values: T[] = [];
    const queue: Array<Node<T>> = [];

    if (root) queue.push(root);

    while (queue.length > 0) {
      const currNode = queue.shift(); // O(n)
      if (!currNode) break;

      values.push(currNode.value);

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }

    return values;
  }

  // O(n) by using a moving index
  sol2_iterative_improved(root: Node<T> | null): T[] {
    const values: T[] = [];
    const queue: Array<Node<T>> = [];

    if (root) queue.push(root);

    let i = 0; // read index
    while (i < queue.length) {
      const currNode = queue[i];
      values.push(currNode.value);

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);

      i++;
    }

    return values;
  }
}

// --------------------
// Test cases
// --------------------

// test_00
const a0 = new Node<string>("a");
const b0 = new Node<string>("b");
const c0 = new Node<string>("c");
const d0 = new Node<string>("d");
const e0 = new Node<string>("e");
const f0 = new Node<string>("f");

a0.left = b0;
a0.right = c0;
b0.left = d0;
b0.right = e0;
c0.right = f0;

// test_01
const a1 = new Node<string>("a");
const b1 = new Node<string>("b");
const c1 = new Node<string>("c");
const d1 = new Node<string>("d");
const e1 = new Node<string>("e");
const f1 = new Node<string>("f");
const g1 = new Node<string>("g");
const h1 = new Node<string>("h");

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;
e1.left = g1;
f1.right = h1;

// test_02
const a2 = new Node<string>("a");

// test_03
const a3 = new Node<string>("a");
const b3 = new Node<string>("b");
const c3 = new Node<string>("c");
const d3 = new Node<string>("d");
const e3 = new Node<string>("e");
const x3 = new Node<string>("x");

a3.right = b3;
b3.left = c3;
c3.left = x3;
c3.right = d3;
d3.right = e3;

export const testCases: TestCases = {
  test_00: {
    input: [a0],
    expected: ["a", "b", "c", "d", "e", "f"],
  },
  test_01: {
    input: [a1],
    expected: ["a", "b", "c", "d", "e", "f", "g", "h"],
  },
  test_02: {
    input: [a2],
    expected: ["a"],
  },
  test_03: {
    input: [a3],
    expected: ["a", "b", "c", "x", "d", "e"],
  },
  test_04: {
    input: [null],
    expected: [],
  },
};

run_test(
    new BreadthFirstValues(),
    "sol2_iterative_improved", 
    testCases, 
    false
);