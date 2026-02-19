
from linked_list import Node
from test_runner import run_test

class LinkedListValues:
    def sol1_iterative(self, head):
        values = []
        while (head):
            values.append(head.value)
            head = head.next
        return values

    def sol2_recursive(self, head):
        if head:
            return [head.value, *self.sol2_recursive(head.next)]
        return []

    def sol3_recursive_with_accumulator(self, head, acc = None):
        if acc is None:
            acc = []
        if head:
            acc.append(head.value);
            return self.sol3_recursive_with_accumulator(head.next, acc);
        return acc


# Test cases
a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")
a.next = b
b.next = c
c.next = d


x = Node("x")
y = Node("y")
x.next = y


q = Node("q")


test_cases = {
    "case_1": {
        "input": [a],
        "expected": ["a", "b", "c", "d"],
    },
    "case_2": {
        "input": [x],
        "expected": ["x", "y"],
    },
    "case_3": {
        "input": [q],
        "expected": ["q"],
    },
    "case_4": {
        "input": [None],
        "expected": [],
    },
}

run_test(
    LinkedListValues(),
    "sol3_recursive_with_accumulator",
    test_cases,
    False
)