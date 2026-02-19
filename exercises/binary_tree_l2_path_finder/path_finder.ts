import { Node } from "../binary_tree_ts";
import { run_test } from "../test_runner";
import { test_cases } from "./test_cases";

class PathFinder<T> {
    constructor() {

    }

    sol1_depth_first_recursive(root: Node<T>|null, target: T): T[]|null {

        if(!root) return null;
        if(root.value === target) {
            return [root.value]
        }
        if(root.left) {
            const leftResult = this.sol1_depth_first_recursive(root.left, target);
            if(leftResult) {
                return [root.value, ...leftResult];
            }
        }
        if(root.right) {
            const rightResult = this.sol1_depth_first_recursive(root.right, target);
            if(rightResult) {
                return [root.value, ...rightResult];
            }
        }

        return null;

    }

    sol2_breadth_first(root: Node<T>|null, target: T): T[]|null {

        if(!root) return null;

        let queue: Node<T>[] = [];
        let parentMap = new Map<Node<T>, Node<T>|null>();
        parentMap.set(root, null);

        queue.push(root);
        let i = 0;

        while(i < queue.length) {
            const curNode = queue[i];

            if (curNode.value === target) {
                let path: T[] = [];
                let loopNode: Node<T>|null = curNode;
                while(loopNode) {
                    path.push(loopNode.value);
                    loopNode = parentMap.get(loopNode) ?? null
                }

                return path.reverse();
            }

            if(curNode.left) {
                parentMap.set(curNode.left, curNode);
                queue.push(curNode.left);
            }
            if(curNode.right) {
                parentMap.set(curNode.right, curNode);
                queue.push(curNode.right);
            }

            i++;
        }



        return null;

    }
}

run_test(
    new PathFinder(),
    'sol2_breadth_first',
    test_cases,
    false
);