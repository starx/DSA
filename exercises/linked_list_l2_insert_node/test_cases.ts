import { Node } from "../linked_list_ts";
import { TestCases } from "../test_runner";

const a0 = new Node<string>("a");
const b0 = new Node<string>("b");
const c0 = new Node<string>("c");
const d0 = new Node<string>("d");
a0.next = b0;
b0.next = c0;
c0.next = d0;

const a1 = new Node<string>("a");
const b1 = new Node<string>("b");
const c1 = new Node<string>("c");
const d1 = new Node<string>("d");
a1.next = b1;
b1.next = c1;
c1.next = d1;

const a2 = new Node<string>("a");
const b2 = new Node<string>("b");
const c2 = new Node<string>("c");
const d2 = new Node<string>("d");
a2.next = b2;
b2.next = c2;
c2.next = d2;

const a3 = new Node<string>("a");
const b3 = new Node<string>("b");
a3.next = b3;

// --------------------
// Edge cases
// --------------------

// insert into single-node list at tail (index == length)
const s4 = new Node<string>("solo");

// insert into single-node list at head (index 0)
const s5 = new Node<string>("solo");

// insert at index 1 in a 2-node list (middle / right after head)
const e6a = new Node<string>("a");
const e6b = new Node<string>("b");
e6a.next = e6b;

// insert numeric value into numeric list (type variation)
const n7a = new Node<number>(1);
const n7b = new Node<number>(2);
const n7c = new Node<number>(4);
n7a.next = n7b;
n7b.next = n7c;

// insert duplicate value (should still insert correctly)
const d8a = new Node<string>("x");
const d8b = new Node<string>("x");
const d8c = new Node<string>("x");
d8a.next = d8b;
d8b.next = d8c;

export const testCases: TestCases = {
  test_00: {
    input: [a0, "x", 2],
    expected: ["a", "b", "x", "c", "d"],
  },
  test_01: {
    input: [a1, "v", 3],
    expected: ["a", "b", "c", "v", "d"],
  },
  test_02: {
    input: [a2, "m", 4],
    expected: ["a", "b", "c", "d", "m"],
  },
  test_03: {
    input: [a3, "z", 0],
    expected: ["z", "a", "b"],
  },

  // --------------------
  // Edge cases
  // --------------------

  // insert at tail of single-node list
  test_04: {
    input: [s4, "tail", 1],
    expected: ["solo", "tail"],
  },

  // insert at head of single-node list
  test_05: {
    input: [s5, "head", 0],
    expected: ["head", "solo"],
  },

  // insert at index 1 in 2-node list
  test_06: {
    input: [e6a, "mid", 1],
    expected: ["a", "mid", "b"],
  },

  // numeric list insert (keeps order of links, not about sorting)
  test_07: {
    input: [n7a, 3, 2],
    expected: [1, 2, 3, 4],
  },

  // inserting a duplicate value in the middle
  test_08: {
    input: [d8a, "x", 1],
    expected: ["x", "x", "x", "x"],
  },
};