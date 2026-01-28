import { Node } from "../binary_tree_ts";
import { run_test, TestCases } from "../test_runner";

class DepthFirstValues<T> {
  sol1_iterative(root: Node<T>): T[] {
    let values: T[] = [];
    let stack: Node<T>[] = [];
    stack.push(root);

    while(stack.length > 0) {
      const curNode = stack.pop();
      if(curNode) {
        values.push(curNode.value);

        if(curNode.right) {
          stack.push(curNode.right);
        }

        if(curNode.left) {
          stack.push(curNode.left);
        }
      }

    }
    return values;

  }

  sol2_recursive(root: Node<T>): T[] {
    let values: T[] = [];
    if(root) {
      values.push(root.value);

      if(root.left) {
        values.push(...this.sol2_recursive(root.left));
      }
      if (root.right) {
        values.push(...this.sol2_recursive(root.right));
      }
    }
    return values;

  }

  sol3_recursive_structy(root: Node<T>|null): T[] {
    if (root === null)
      return [];
  
    const leftValues = this.sol3_recursive_structy(root.left);
    const rightValues = this.sol3_recursive_structy(root.right);
    return [ root.value, ...leftValues, ...rightValues ];
};

}

// Test cases

// --------------------
// test_00
// --------------------
const a0 = new Node<string>('a');
const b0 = new Node<string>('b');
const c0 = new Node<string>('c');
const d0 = new Node<string>('d');
const e0 = new Node<string>('e');
const f0 = new Node<string>('f');

a0.left = b0;
a0.right = c0;
b0.left = d0;
b0.right = e0;
c0.right = f0;


// --------------------
// test_01
// --------------------
const a1 = new Node<string>('a');
const b1 = new Node<string>('b');
const c1 = new Node<string>('c');
const d1 = new Node<string>('d');
const e1 = new Node<string>('e');
const f1 = new Node<string>('f');
const g1 = new Node<string>('g');

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;
e1.left = g1;


// --------------------
// test_02
// --------------------
const a2 = new Node<string>('a');


// --------------------
// test_03
// --------------------
const a3 = new Node<string>('a');
const b3 = new Node<string>('b');
const c3 = new Node<string>('c');
const d3 = new Node<string>('d');
const e3 = new Node<string>('e');

a3.right = b3;
b3.left = c3;
c3.right = d3;
d3.right = e3;


// --------------------
// test_04
// --------------------


export const testCases: TestCases = {
  test_00: {
    input: [a0],
    expected: ['a', 'b', 'd', 'e', 'c', 'f'],
  },
  test_01: {
    input: [a1],
    expected: ['a', 'b', 'd', 'e', 'g', 'c', 'f'],
  },
  test_02: {
    input: [a2],
    expected: ['a'],
  },
  test_03: {
    input: [a3],
    expected: ['a', 'b', 'c', 'd', 'e'],
  },
  test_04: {
    input: [null],
    expected: [],
  },
};

run_test(
  new DepthFirstValues(),
  "sol1_iterative",
  testCases,
  false
)