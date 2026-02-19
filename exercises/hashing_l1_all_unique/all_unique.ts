import { run_test, TestCases } from "../test_runner";

class AllUnique {
    sol1(arr: string[]): boolean {
        const uniques: Record<string, number> = {};
        const arr_length = arr.length;
        
        for(let i = 0; i < arr_length; i++) {
            const item = arr[i];
            if(!(item in uniques)) {
                uniques[item] = i;
            }
        }

        const uniques_length = Object.values(uniques).length;

        return arr_length === uniques_length;
    }


    sol2_sol1_improved(arr: string[]): boolean {
        const uniques: Record<string, number> = {};
        const arr_length = arr.length;
        
        for(let i = 0; i < arr_length; i++) {
            const item = arr[i];
            if(item in uniques) {
                return false;
            }
            uniques[item] = i;
        }

        return true;
    }
}

const testCases: TestCases = {
  test_00: {
    input: [["q", "r", "s", "a"]],
    expected: true,
  },
  test_01: {
    input: [["q", "r", "s", "a", "r", "z"]],
    expected: false,
  },
  test_02: {
    input: [["red", "blue", "yellow", "green", "orange"]],
    expected: true,
  },
  test_03: {
    input: [["cat", "cat", "dog"]],
    expected: false,
  },
  test_04: {
    input: [["a", "u", "t", "u", "m", "n"]],
    expected: false,
  },
};

run_test(new AllUnique(), 'sol2_sol1_improved', testCases, false);