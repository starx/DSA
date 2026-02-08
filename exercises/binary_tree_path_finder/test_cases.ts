import { Node } from "../binary_tree_ts";
import { TestCases } from "../test_runner";

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

// test_01 (fresh nodes)
const a1 = new Node<string>("a");
const b1 = new Node<string>("b");
const c1 = new Node<string>("c");
const d1 = new Node<string>("d");
const e1 = new Node<string>("e");
const f1 = new Node<string>("f");

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

// test_02
const a2 = new Node<string>("a");
const b2 = new Node<string>("b");
const c2 = new Node<string>("c");
const d2 = new Node<string>("d");
const e2 = new Node<string>("e");
const f2 = new Node<string>("f");
const g2 = new Node<string>("g");
const h2 = new Node<string>("h");

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;
e2.left = g2;
f2.right = h2;

// test_03 (fresh nodes)
const a3 = new Node<string>("a");
const b3 = new Node<string>("b");
const c3 = new Node<string>("c");
const d3 = new Node<string>("d");
const e3 = new Node<string>("e");
const f3 = new Node<string>("f");
const g3 = new Node<string>("g");
const h3 = new Node<string>("h");

a3.left = b3;
a3.right = c3;
b3.left = d3;
b3.right = e3;
c3.right = f3;
e3.left = g3;
f3.right = h3;

// test_04
const x4 = new Node<string>("x");

// test_06 (deep right-skewed)
const root6 = new Node<number>(0);
let curr6 = root6;
for (let i = 1; i <= 6000; i += 1) {
  curr6.right = new Node<number>(i);
  curr6 = curr6.right;
}
const expected6 = Array.from({ length: 3452 }, (_, i) => i); // [0..3451]

// edge_00: target is root in larger tree
const er0a = new Node<string>("a");
const er0b = new Node<string>("b");
const er0c = new Node<string>("c");
er0a.left = er0b;
er0a.right = er0c;

// edge_01: target is far left leaf
const el1a = new Node<string>("a");
const el1b = new Node<string>("b");
const el1c = new Node<string>("c");
const el1d = new Node<string>("d");
el1a.left = el1b;
el1b.left = el1c;
el1c.left = el1d;

// edge_02: numeric tree, target not found
const en2a = new Node<number>(10);
const en2b = new Node<number>(5);
const en2c = new Node<number>(15);
en2a.left = en2b;
en2a.right = en2c;

// edge_03: unbalanced tree where target is in the shorter branch
const eu3a = new Node<string>("a");
const eu3b = new Node<string>("b");
const eu3c = new Node<string>("c");
const eu3d = new Node<string>("d");
const eu3e = new Node<string>("e");
eu3a.left = eu3b;
eu3a.right = eu3c;
eu3b.left = eu3d;
eu3d.left = eu3e;


export const test_cases: TestCases = {
  test_00: {
    input: [a0, "e"],
    expected: ["a", "b", "e"],
  },
  test_01: {
    input: [a1, "p"],
    expected: null,
  },
  test_02: {
    input: [a2, "c"],
    expected: ["a", "c"],
  },
  test_03: {
    input: [a3, "h"],
    expected: ["a", "c", "f", "h"],
  },
  test_04: {
    input: [x4, "x"],
    expected: ["x"],
  },
  test_05: {
    input: [null, "x"],
    expected: null,
  },
  test_06: {
    input: [root6, 3451],
    expected: expected6,
  },

  // --------------------
  // Edge cases
  // --------------------

  edge_00: {
    input: [er0a, "a"],
    expected: ["a"],
  },
  edge_01: {
    input: [el1a, "d"],
    expected: ["a", "b", "c", "d"],
  },
  edge_02: {
    input: [en2a, 99],
    expected: null,
  },
  edge_03: {
    input: [eu3a, "c"],
    expected: ["a", "c"],
  },
};