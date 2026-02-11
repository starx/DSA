import { Node } from "../binary_tree_ts";
import { run_test } from "../test_runner";
import { testCases } from "./test_cases";

type sol1_result<T> = {
    deepestLevel: number,
    bottomRightValue: T|null
}

class BottomRightValues<T> {

    constructor() {

    }


    // in df access, we will access a path to its depth first and then its consequent right
    // so, if we track only the deepestLevel and the rightmostValue
    // it will always be te expected result
    sol1_dfs_recursive(
        root: Node<T>, 
        level: number = 0, 
        result: sol1_result<T>|null = null
    ): any {
        if(result === null) {
            result = { deepestLevel: level, bottomRightValue: root.value }
        }

        if(level >= result.deepestLevel) {
            result.deepestLevel = level;
            result.bottomRightValue = root.value;
        }

        if(root.left) {
            this.sol1_dfs_recursive(root.left, level+1, result);
        }
        if(root.right) {
            this.sol1_dfs_recursive(root.right, level+1, result);
        }

        return result.bottomRightValue;

    }

    // in bf access, the last element is always the most bottom right value of that depth
    // so the last element when the traversing the whole tree is done
    // is the expected result
    sol2_bfs_iterative(root: Node<T>): T {
        const queue: Node<T>[] = [root];
        let i = 0;

        let lastValue: T = root.value;

        while (i < queue.length) {
            const curNode = queue[i];
            i++;

            lastValue = curNode.value;

            if (curNode.left) {
                queue.push(curNode.left);
            }

            if (curNode.right) {
                queue.push(curNode.right);
            }
        }

        return lastValue;
    }
}

run_test(
    new BottomRightValues(),
    'sol2_bfs_iterative',
    testCases,
    false
);