from test_runner import run_test
from binary_tree import Node
from .test_cases import test_cases
from typing import List, TypeVar, Generic

T = TypeVar("T")

class MinValue(Generic[T]):

    def __init__(self):
        pass

    def sol1_depth_first_recursive(self, root: Node|None, min: T|None = None):
        if root:
            if min is None or root.value < min:
                min = root.value
                
            min = self.sol1_depth_first_recursive(root.left, min)
            min = self.sol1_depth_first_recursive(root.right, min)

        return min
    
    def sol2_breadth_first_iterative(self, root: Node|None):
        min: T|None = None

        from collections import deque
        queue: deque = deque()
        if root:
            min = root.value
            queue.append(root)
        
        while queue:
            currNode: Node = queue.popleft()
            
            if currNode.value < min:
                min = currNode.value

            if currNode.left is not None:
                queue.append(currNode.left)

            if currNode.right is not None:
                queue.append(currNode.right)                           
        return min


run_test(
    MinValue(),
    'sol2_breadth_first_iterative',
    test_cases,
    False    
)