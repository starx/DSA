import { dprint, run_test, TestCases } from "../test_runner";

class PairProduct {
    sol1(numbers: number[], target: number): [number, number] | undefined {
        let checked: Record<number, number> = {};
        for(let i = 0; i < numbers.length; i++) {
          const num = numbers[i];
          
          const rem: number = target / num;
          var found: boolean = Object.keys(checked).includes(`${rem}`);
          if(found) {
            return [checked[rem], i];
          }

          checked[num] = i;
        }

        return;

    }
}

const testCases: TestCases  = {
  case_1: {
    input: [[3, 2, 5, 4, 1], 8],
    expected: [1, 3],
  },
  case_2: {
    input: [[3, 2, 5, 4, 1], 10],
    expected: [1, 2],
  },
  case_3: {
    input: [[4, 7, 9, 2, 5, 1], 5],
    expected: [4, 5],
  },
  case_4: {
    input: [[4, 7, 9, 2, 5, 1], 35],
    expected: [1, 4],
  },
  case_5: {
    input: [[3, 2, 5, 4, 1], 10],
    expected: [1, 2],
  },
  case_6: {
    input: [[4, 6, 8, 2], 16],
    expected: [2, 3],
  },
  case_7: {
    input: [[4, 6, 8, 2], 16],
    expected: [2, 3],
  },
};

run_test(
  new PairProduct(),
  "sol1",
  testCases,
  false
);