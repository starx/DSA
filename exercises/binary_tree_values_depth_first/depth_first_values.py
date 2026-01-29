from test_runner import run_test
from binary_tree import Node
from typing import List, TypeVar, Generic

T = TypeVar("T")

class DepthFirstValues(Generic[T]):

    def sol1_iterative(self, root: Node[T]|None) -> List[T]:
        if root is None:
            return []

        values: List[T] = []
        stack: List[Node[T]] = [root]

        while stack:
            cur_node = stack.pop()
            values.append(cur_node.value)

            if cur_node.right:
                stack.append(cur_node.right)
            if cur_node.left:
                stack.append(cur_node.left)

        return values

    def sol2_recursive(self, root: Node[T]|None) -> List[T]:
        values: List[T] = []

        if root:
            values.append(root.value)
            values.extend(self.sol2_recursive(root.left))
            values.extend(self.sol2_recursive(root.right))

        return values

    def sol3_recursive_structy(self, root: Node[T]|None) -> List[T]:
        if root is None:
            return []

        left_values = self.sol3_recursive_structy(root.left)
        right_values = self.sol3_recursive_structy(root.right)
        return [root.value, *left_values, *right_values]
    
# Test cases


# --------------------
# test_00
# --------------------
a0 = Node("a")
b0 = Node("b")
c0 = Node("c")
d0 = Node("d")
e0 = Node("e")
f0 = Node("f")

a0.left = b0
a0.right = c0
b0.left = d0
b0.right = e0
c0.right = f0

# --------------------
# test_01
# --------------------
a1 = Node("a")
b1 = Node("b")
c1 = Node("c")
d1 = Node("d")
e1 = Node("e")
f1 = Node("f")
g1 = Node("g")

a1.left = b1
a1.right = c1
b1.left = d1
b1.right = e1
c1.right = f1
e1.left = g1

# --------------------
# test_02
# --------------------
a2 = Node("a")

# --------------------
# test_03
# --------------------
a3 = Node("a")
b3 = Node("b")
c3 = Node("c")
d3 = Node("d")
e3 = Node("e")

a3.right = b3
b3.left = c3
c3.right = d3
d3.right = e3

# --------------------
# test_04
# --------------------

test_cases = {
    "test_00": {
        "input": [a0],
        "expected": ["a", "b", "d", "e", "c", "f"],
    },
    "test_01": {
        "input": [a1],
        "expected": ["a", "b", "d", "e", "g", "c", "f"],
    },
    "test_02": {
        "input": [a2],
        "expected": ["a"],
    },
    "test_03": {
        "input": [a3],
        "expected": ["a", "b", "c", "d", "e"],
    },
    "test_04": {
        "input": [None],
        "expected": [],
    },
}

# Run test
run_test(
    DepthFirstValues(),
    "sol2_recursive",
    test_cases,
    False
)