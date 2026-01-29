from typing import Generic, List, TypeVar
from test_runner import run_test
from binary_tree import Node

T = TypeVar("T")

class BreadthFirstValues(Generic[T]):
    def sol1_iterative(self, root: Node[T]|None, add_root: bool = True)->List[T]:
        values: List[T] = []
        queue: List[Node] = []
        if root:
            queue.append(root)
        
        while queue:
            currNode: Node = queue.pop(0) # this is O(N)
            values.append(currNode.value)

            if currNode.left is not None:
                queue.append(currNode.left)

            if currNode.right is not None:
                queue.append(currNode.right)                           
        return values
    
    def sol2_iterative_improved(self, root: Node[T]|None, add_root: bool = True)->List[T]:
        values: List[T] = []
        from collections import deque
        queue: deque = deque()
        if root:
            queue.append(root)
        
        while queue:
            currNode: Node = queue.popleft()
            values.append(currNode.value)

            if currNode.left is not None:
                queue.append(currNode.left)

            if currNode.right is not None:
                queue.append(currNode.right)                           
        return values
    
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
h1 = Node("h")

a1.left = b1
a1.right = c1
b1.left = d1
b1.right = e1
c1.right = f1
e1.left = g1
f1.right = h1

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
x3 = Node("x")

a3.right = b3
b3.left = c3
c3.left = x3
c3.right = d3
d3.right = e3

# --------------------
# test_04
# --------------------

test_cases = {
    "test_00": {
        "input": [a0],
        "expected": ["a", "b", "c", "d", "e", "f"],
    },
    "test_01": {
        "input": [a1],
        "expected": ["a", "b", "c", "d", "e", "f", "g", "h"],
    },
    "test_02": {
        "input": [a2],
        "expected": ["a"],
    },
    "test_03": {
        "input": [a3],
        "expected": ["a", "b", "c", "x", "d", "e"],
    },
    "test_04": {
        "input": [None],
        "expected": [],
    },
}

run_test(
    BreadthFirstValues(),
    'sol2_iterative_improved',
    test_cases,
    False
)