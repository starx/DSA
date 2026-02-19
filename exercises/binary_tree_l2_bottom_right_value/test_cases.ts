import { Node } from "../binary_tree_ts";
import { TestCases } from "../test_runner";

// test_00
const a0 = new Node<number>(3);
const b0 = new Node<number>(11);
const c0 = new Node<number>(10);
const d0 = new Node<number>(4);
const e0 = new Node<number>(-2);
const f0 = new Node<number>(1);

a0.left = b0;
a0.right = c0;
b0.left = d0;
b0.right = e0;
c0.right = f0;

// test_01
const a1 = new Node<number>(-1);
const b1 = new Node<number>(-6);
const c1 = new Node<number>(-5);
const d1 = new Node<number>(-3);
const e1 = new Node<number>(-4);
const f1 = new Node<number>(-13);
const g1 = new Node<number>(-2);
const h1 = new Node<number>(6);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;
e1.left = g1;
e1.right = h1;

// test_02
const a2 = new Node<number>(-1);
const b2 = new Node<number>(-6);
const c2 = new Node<number>(-5);
const d2 = new Node<number>(-3);
const e2 = new Node<number>(-4);
const f2 = new Node<number>(-13);
const g2 = new Node<number>(-2);
const h2 = new Node<number>(6);
const i2 = new Node<number>(7);

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;
e2.left = g2;
e2.right = h2;
f2.left = i2;

// test_03
const a3 = new Node<string>("a");
const b3 = new Node<string>("b");
const c3 = new Node<string>("c");
const d3 = new Node<string>("d");
const e3 = new Node<string>("e");
const f3 = new Node<string>("f");

a3.left = b3;
a3.right = c3;
b3.right = d3;
d3.left = e3;
e3.right = f3;

// test_04
const a4 = new Node<number>(42);

// --------------------
// Edge cases
// --------------------

// edge_00: bottom-most level has only ONE node (deep left chain)
const el0a = new Node<number>(1);
const el0b = new Node<number>(2);
const el0c = new Node<number>(3);
const el0d = new Node<number>(4);
el0a.left = el0b;
el0b.left = el0c;
el0c.left = el0d;
// bottom-right is 4

// edge_01: bottom-most level is wider; ensure right-most is chosen
const ew1a = new Node<number>(1);
const ew1b = new Node<number>(2);
const ew1c = new Node<number>(3);
const ew1d = new Node<number>(4);
const ew1e = new Node<number>(5);
const ew1f = new Node<number>(6);
const ew1g = new Node<number>(7);
ew1a.left = ew1b;
ew1a.right = ew1c;
ew1b.left = ew1d;
ew1b.right = ew1e;
ew1c.left = ew1f;
ew1c.right = ew1g;
// bottom level: 4,5,6,7 => bottom-right is 7

// edge_02: right subtree is shallower than left; bottom-right may still be on left
const es2a = new Node<number>(10);
const es2b = new Node<number>(5);
const es2c = new Node<number>(15);
const es2d = new Node<number>(1);
const es2e = new Node<number>(2);
es2a.left = es2b;
es2a.right = es2c;
es2b.left = es2d;
es2d.right = es2e;
// deepest leaf is 2 (on left side), so bottom-right is 2

// edge_03: string values, bottom-right not on the far-right branch visually
const es3a = new Node<string>("root");
const es3b = new Node<string>("L");
const es3c = new Node<string>("R");
const es3d = new Node<string>("LL");
const es3e = new Node<string>("LLR");
es3a.left = es3b;
es3a.right = es3c;
es3b.left = es3d;
es3d.right = es3e;
// deepest is "LLR", bottom-right is "LLR"

export const testCases: TestCases = {
  test_00: {
    input: [a0],
    expected: 1,
  },
  test_01: {
    input: [a1],
    expected: 6,
  },
  test_02: {
    input: [a2],
    expected: 7,
  },
  test_03: {
    input: [a3],
    expected: "f",
  },
  test_04: {
    input: [a4],
    expected: 42,
  },

  // --------------------
  // Edge cases
  // --------------------
  edge_00: {
    input: [el0a],
    expected: 4,
  },
  edge_01: {
    input: [ew1a],
    expected: 7,
  },
  edge_02: {
    input: [es2a],
    expected: 2,
  },
  edge_03: {
    input: [es3a],
    expected: "LLR",
  },
};