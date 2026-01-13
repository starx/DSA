let debug_mode = false;

export function dprint(msg: string): void {
  if (debug_mode === true) {
    // PHP print() is basically a direct write; console.log is close enough.
    // If you want no newline behavior, use process.stdout.write(msg).
    console.log(msg);
  }
}

export type TestCase = {
  input: any[];      // array of args to pass to the function
  expected: any;     // expected return value
};

export type TestCases = Record<string, TestCase>;

export function run_test(
  solutionClassObj: any,
  solutionName: string,
  testCases: TestCases,
  debug: boolean
): void {
  debug_mode = debug;

  for (const [caseId, testCase] of Object.entries(testCases)) {
    const { input, expected } = testCase;

    const start = performance.now();
    const fn = solutionClassObj?.[solutionName];

    if (typeof fn !== "function") {
      console.log(`${caseId} invalid`);
      console.log(`time taken: 0\n`);
      console.log("----------------------------\n");
      continue;
    }

    const result = fn.apply(solutionClassObj, input);
    const success = deepEqual(result, expected);
    const end = performance.now();
    const execTimeMs = end - start;

    console.log(`${caseId} ${success ? "passed" : "failed"}`);
    console.log(`time taken: ${execTimeMs}ms\n`);

    if (!success) {
      console.log(`Expected:\n\n`, typeof expected, expected, `\n\nResult:\n\n`, typeof result, result);
    }

    console.log("----------------------------\n\n");
  }
}

function deepEqual(a: any, b: any): boolean {
  if (a === b) return true;

  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
    return false;
  }

  if (Array.isArray(a) !== Array.isArray(b)) return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

// Setup instrunctions
//
// npm install -D ts-node typescript @types/node
// 
// run with
//
// npx ts-node testfile.ts

// Usage instructions
//
//
// import { dprint, run_test, TestCases } from "./test_runner";

// class Problem {
//     sol1(a: any, b: any): undefined {
//         return;
//     }
// }

// const testCases: TestCases  = {
//   case_1: {
//     input: ["a", "b"],
//     expected: false,
//   },
//   // ...
// };

// run_test(
//   new Problem(),
//   "sol1",
//   testCases,
//   false
// );