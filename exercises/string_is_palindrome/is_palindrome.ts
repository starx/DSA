import { run_test, TestCases } from "../test_runner"

class IsPalindrome {
    constructor() {

    }

    sol1_two_pointer(input: string): boolean {
        let leftPointer = 0;
        let rightPointer = input.length - 1;

        while(leftPointer < rightPointer) {
            if(input[leftPointer] !== input[rightPointer]) return false;
            leftPointer++;
            rightPointer--;
        }
        return true;
    }
}

export const testCases: TestCases = {
  // --------------------
  // Basic tests
  // --------------------
  test_00: {
    input: ["racecar"],
    expected: true,
  },
  test_01: {
    input: ["nursesrun"],
    expected: true,
  },
  test_02: {
    input: ["robot"],
    expected: false,
  },
  test_03: {
    input: ["a"],
    expected: true,
  },
  test_04: {
    input: ["aa"],
    expected: true,
  },
  test_05: {
    input: ["ab"],
    expected: false,
  },
  test_06: {
    input: ["abba"],
    expected: true,
  },
  test_07: {
    input: ["abcba"],
    expected: true,
  },
  test_08: {
    input: ["abcdcba"],
    expected: true,
  },
  test_09: {
    input: ["abcd"],
    expected: false,
  },

  // --------------------
  // Edge cases
  // --------------------
  edge_00: {
    input: ["z"],
    expected: true,
  },
  edge_01: {
    input: ["cc"],
    expected: true,
  },
  edge_02: {
    input: ["xy"],
    expected: false,
  },
  edge_03: {
    input: ["abcdefghhgfedcba"],
    expected: true,
  },
  edge_04: {
    input: ["abcdefghijklmnop"],
    expected: false,
  },
};

run_test(
    new IsPalindrome(),
    'sol1_two_pointer',
    testCases,
    false
)