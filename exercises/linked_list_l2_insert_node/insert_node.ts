import { run_test, dprint } from "../test_runner";
import { Node, list_to_value_array } from "../linked_list_ts";
import { testCases } from "./test_cases";



class InsertNode<T> {
    constructor() {

    }

    sol1_iterative(head: Node<T>, targetValue: T, targetIndex: number) {
        let currentNode: Node<T>|null = head;
        let previousNode: Node<T>|null = null;
        for(let curIndex = 0; curIndex <= targetIndex; curIndex++) {
            if(curIndex === targetIndex) {
                const newNode = new Node<T>(targetValue, currentNode);
                if(previousNode) {
                    previousNode.next = newNode;
                } else head = newNode;
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode?.next ?? null;
        }
        return head;

    }
}

run_test(
    new InsertNode(),
    'sol1_iterative', 
    testCases,
    false,
    (head) => list_to_value_array(head)
)