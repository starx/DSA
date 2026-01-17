from linked_list import Node
from test_runner import dprint, run_test

class LinkedListFind:
    def sol1_iterative(self, head, target):
        while head is not None:
            if head.value == target:
                return True
            head = head.next
        return False

    def sol2_recursive(self, head, search):
        if head:
            if head.value == search:
                return True
            else:
                return self.sol1(head.next, search)
        return False

# Test cases
a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

node1 = Node("jason")
node2 = Node("leneli")
node1.next = node2

single_42 = Node(42)

test_cases = {
    "test_00": {
        "input": [a, "c"],
        "expected": True,
    },
    "test_01": {
        "input": [a, "d"],
        "expected": True,
    },
    "test_02": {
        "input": [a, "q"],
        "expected": False,
    },
    "test_03": {
        "input": [node1, "jason"],
        "expected": True,
    },
    "test_04": {
        "input": [single_42, 42],
        "expected": True,
    },
    "test_05": {
        "input": [single_42, 100],
        "expected": False,
    },
}

run_test(
    LinkedListFind(),
    'sol2_recursive',
    test_cases,
    False
)