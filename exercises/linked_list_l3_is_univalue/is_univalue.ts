import { Node } from "../linked_list_ts";
import { run_test, TestCases, dprint } from "../test_runner";

class IsUnivalue<T> {
    sol1_iterative(head: Node<T>|null = null): boolean {
        let firstValue: T | undefined;
        while(head) {
            if(firstValue === undefined) {
                firstValue = head.value;
            } else {
                if(head.value !== firstValue) {
                    return false;
                }
            }
            head = head.next;
        }
        return true;
    }

    sol2_recursive(head: Node<T>|null = null, firstValue: T | null):boolean {
        if(!head) {
            return true; // This depends on the assumption that the list is non empty to begin with
        }
        if(!firstValue) {
            firstValue = head.value;
        } else {
            if(head.value !== firstValue) {
                return false;
            }
        }
        return this.sol2_recursive(head.next, firstValue);
    }

}

// Test cases
const a1 = new Node<number>(7);
const b1 = new Node<number>(7);
const c1 = new Node<number>(7);

a1.next = b1;
b1.next = c1;


const a2 = new Node<number>(7);
const b2 = new Node<number>(7);
const c2 = new Node<number>(4);

a2.next = b2;
b2.next = c2;


const u3 = new Node<number>(2);
const v3 = new Node<number>(2);
const w3 = new Node<number>(2);
const x3 = new Node<number>(2);
const y3 = new Node<number>(2);

u3.next = v3;
v3.next = w3;
w3.next = x3;
x3.next = y3;


const u4 = new Node<number>(2);
const v4 = new Node<number>(2);
const w4 = new Node<number>(3);
const x4 = new Node<number>(3);
const y4 = new Node<number>(2);

u4.next = v4;
v4.next = w4;
w4.next = x4;
x4.next = y4;


const z5 = new Node<string>("z");


const u6 = new Node<number>(2);
const v6 = new Node<number>(1);
const w6 = new Node<number>(2);
const x6 = new Node<number>(2);
const y6 = new Node<number>(2);

u6.next = v6;
v6.next = w6;
w6.next = x6;
x6.next = y6;


const testCases: TestCases = {
  test_00: {
    input: [a1],
    expected: true,
  },
  test_01: {
    input: [a2],
    expected: false,
  },
  test_02: {
    input: [u3],
    expected: true,
  },
  test_03: {
    input: [u4],
    expected: false,
  },
  test_04: {
    input: [z5],
    expected: true,
  },
  test_05: {
    input: [u6],
    expected: false,
  },
};

run_test(
    new IsUnivalue<number>(),
    'sol2_recursive',
    testCases,
    false
)