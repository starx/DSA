import { Node } from "../binary_tree_ts"
import { TestCases } from "../test_runner";

// test_00 / test_01 / test_02 share same shape but use fresh nodes to avoid mutation bleed
const t0a = new Node<string>("a");
const t0b = new Node<string>("b");
const t0c = new Node<string>("c");
const t0d = new Node<string>("d");
const t0e = new Node<string>("e");
const t0f = new Node<string>("f");

t0a.left = t0b;
t0a.right = t0c;
t0b.left = t0d;
t0b.right = t0e;
t0c.right = t0f;

const t1a = new Node<string>("a");
const t1b = new Node<string>("b");
const t1c = new Node<string>("c");
const t1d = new Node<string>("d");
const t1e = new Node<string>("e");
const t1f = new Node<string>("f");

t1a.left = t1b;
t1a.right = t1c;
t1b.left = t1d;
t1b.right = t1e;
t1c.right = t1f;

const t2a = new Node<string>("a");
const t2b = new Node<string>("b");
const t2c = new Node<string>("c");
const t2d = new Node<string>("d");
const t2e = new Node<string>("e");
const t2f = new Node<string>("f");

t2a.left = t2b;
t2a.right = t2c;
t2b.left = t2d;
t2b.right = t2e;
t2c.right = t2f;

// test_03 / test_04 share same larger shape, again fresh nodes
const t3a = new Node<string>("a");
const t3b = new Node<string>("b");
const t3c = new Node<string>("c");
const t3d = new Node<string>("d");
const t3e = new Node<string>("e");
const t3f = new Node<string>("f");
const t3g = new Node<string>("g");
const t3h = new Node<string>("h");

t3a.left = t3b;
t3a.right = t3c;
t3b.left = t3d;
t3b.right = t3e;
t3c.right = t3f;
t3e.left = t3g;
t3f.right = t3h;

const t4a = new Node<string>("a");
const t4b = new Node<string>("b");
const t4c = new Node<string>("c");
const t4d = new Node<string>("d");
const t4e = new Node<string>("e");
const t4f = new Node<string>("f");
const t4g = new Node<string>("g");
const t4h = new Node<string>("h");

t4a.left = t4b;
t4a.right = t4c;
t4b.left = t4d;
t4b.right = t4e;
t4c.right = t4f;
t4e.left = t4g;
t4f.right = t4h;

// --------------------
// Edge cases
// --------------------

// single node tree: match
const e6 = new Node<string>("z");

// single node tree: no match
const e7 = new Node<string>("z");

// skewed-left tree
const e8a = new Node<string>("a");
const e8b = new Node<string>("b");
const e8c = new Node<string>("c");
const e8d = new Node<string>("d");
e8a.left = e8b;
e8b.left = e8c;
e8c.left = e8d;

// duplicate values: ensure "any match" works (should return true if present anywhere)
const e9a = new Node<string>("x");
const e9b = new Node<string>("x");
const e9c = new Node<string>("y");
e9a.left = e9b;
e9a.right = e9c;

// numeric values: type variation
const e10a = new Node<number>(1);
const e10b = new Node<number>(2);
const e10c = new Node<number>(3);
e10a.left = e10b;
e10a.right = e10c;

export const testCases: TestCases = {
  test_00: {
    input: [t0a, "e"],
    expected: true,
  },
  test_01: {
    input: [t1a, "a"],
    expected: true,
  },
  test_02: {
    input: [t2a, "n"],
    expected: false,
  },
  test_03: {
    input: [t3a, "f"],
    expected: true,
  },
  test_04: {
    input: [t4a, "p"],
    expected: false,
  },
  test_05: {
    input: [null, "b"],
    expected: false,
  },

  // --------------------
  // Edge cases
  // --------------------

  test_06: {
    input: [e6, "z"],
    expected: true,
  },
  test_07: {
    input: [e7, "a"],
    expected: false,
  },
  test_08: {
    input: [e8a, "d"],
    expected: true,
  },
  test_09: {
    input: [e9a, "x"],
    expected: true,
  },
  test_10: {
    input: [e10a, 3],
    expected: true,
  },
  test_11: {
    input: [e10a, 99],
    expected: false,
  },
};