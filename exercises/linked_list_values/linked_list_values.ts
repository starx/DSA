import { Node } from "../linked_list_ts";
import { dprint, run_test, TestCases } from "../test_runner";

class LinkedListValues {
    sol1_iterative(head: Node<string>): string[] {
        const values: string[] = [];
        while (head !== null) {
            values.push(head.value);
            if (head.next === null) {
                break;
            }
            head = head.next;

        }

        return values;
    }

    sol2_recursive(head: Node<string>): string[] {
        const values: string[] = [];
        if (head === null) {
            return values;
        }

        values.push(head.value);
        const next = head.next;
        if (next !== null) {
            values.push(...this.sol2_recursive(next));
        }
        return values;
    }

    sol3_recursive_with_accumulator(head: Node<string> | null, acc: string[] = []): string[] {
        const values: string[] = [];
        if (head !== null) {
            acc.push(head.value);
            this.sol3_recursive_with_accumulator(head.next, acc);
        }
        return acc;
    }
}

// Test cases
const a = new Node<string>("a");
const b = new Node<string>("b");
const c = new Node<string>("c");
const d = new Node<string>("d");
a.next = b;
b.next = c;
c.next = d;


const x = new Node<string>("x");
const y = new Node<string>("y");
x.next = y;

const q = new Node<string>("q");

const testCases: TestCases  = {
  case_1: {
    input: [a],
    expected: ['a', 'b', 'c', 'd'],
  },
  case_2: {
    input: [x],
    expected: ['x', 'y'],
  },
  case_3: {
    input: [q],
    expected: ['q'],
  },
  case_4: {
    input: [null],
    expected: [],
  },
};

run_test(
  new LinkedListValues(),
  "sol3_recursive_with_accumulator",
  testCases,
  false
);