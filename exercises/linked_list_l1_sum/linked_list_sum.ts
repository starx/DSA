import { Node } from "../linked_list_ts";
import { dprint, run_test, TestCases } from "../test_runner";

class LinkedListSum {
    sol1_iterative(head: Node<number>|null):number {
        let sum: number = 0;
        while(head) {
            sum += head.value;
            head = head.next;
        }
        return sum;

    }

    sol2_recursive_with_accumulator(head: Node<number> | null, sum: number = 0): number {    
        if (head !== null) {
            sum += head.value;
            this.sol2_recursive_with_accumulator(head.next, sum);
        }
        return sum;
    }

}

// Test cases
const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const x = new Node(38);
const y = new Node(4);
x.next = y;

const z = new Node(100);

const testCases = {
  test_00: {
    input: [a],
    expected: 19,
  },
  test_01: {
    input: [x],
    expected: 42,
  },
  test_02: {
    input: [z],
    expected: 100,
  },
  test_03: {
    input: [null],
    expected: 0,
  },
};

run_test(new LinkedListSum(), 'sol2_recursive_with_accumulator', testCases, false);