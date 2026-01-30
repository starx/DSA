import { Node } from "../binary_tree_ts";
import { run_test } from "../test_runner";
import { testCases } from "./test_cases";

class TreeIncludes<T> {
    constructor() {

    }

    sol1_depth_first_recursive(root: Node<T>|null, target: T): boolean {
        if(!root) return false;

        if(root.value === target) return true;
        if(root.left) {
            const searchLeft = this.sol1_depth_first_recursive(root.left, target);
            if(searchLeft === true) return true;
        }
        if(root.right) {
            const searchRight = this.sol1_depth_first_recursive(root.right, target);
            if(searchRight === true) return true;
        }

        return false;
    }

    sol2_breadth_first_iterative(root: Node<T>|null, target: T): boolean {
        if(!root) return false;

        let queue: Node<T>[] = [root];
        let i = 0;
        while(i < queue.length) {
            const curNode = queue[i];
            if(curNode.value === target) return true;
            if(curNode.left) {
                queue.push(curNode.left);
            }
            if(curNode.right) {
                queue.push(curNode.right);
            }

            i++;
        }

        return false;
    }


}

run_test(
    new TreeIncludes(),
    'sol2_breadth_first_iterative',
    testCases,
    false
)