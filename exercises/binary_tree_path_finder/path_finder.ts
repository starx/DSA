import { Node } from "../binary_tree_ts";
import { run_test } from "../test_runner";
import { test_cases } from "./test_cases";

class PathFinder<T> {
    constructor() {

    }

    sol1_depth_first(root: Node<T>|null, target: T): T[]|null {

        if(!root) return null;
        if(root.value === target) {
            return [root.value]
        }
        if(root.left) {
            const leftResult = this.sol1_depth_first(root.left, target);
            if(leftResult) {
                return [root.value, ...leftResult];
            }
        }
        if(root.right) {
            const rightResult = this.sol1_depth_first(root.right, target);
            if(rightResult) {
                return [root.value, ...rightResult];
            }
        }

        return null;

    }
}

run_test(
    new PathFinder(),
    'sol1_depth_first',
    test_cases,
    false
);