from binary_tree import Node
from test_runner import run_test
from .test_cases import test_cases

from typing import Generic, TypeVar

T = TypeVar("T")

class ValueCount(Generic[T]):
    def __init__(self):
        pass

    def sol1_dfs_recursive(self, root: Node|None, target: T) -> int:
        if not root:
            return 0
        
        count = 0
        
        if root.value == target:
            count += 1
        
        if root.left:
            count += self.sol1_dfs_recursive(root.left, target)
        if root.right:
            count += self.sol1_dfs_recursive(root.right, target)
        
        return count
    

    def sol2_bfs_iterative(self, root: Node|None, target: T) -> int:
        if not root:
            return 0
        
        count = 0
        
        from collections import deque
        queue = deque()

        queue.append(root)

        while(queue):
            curNode = queue.popleft()

            if curNode.value == target:
                count += 1
        
            if curNode.left:
                queue.append(curNode.left)
            if curNode.right:
                queue.append(curNode.right)
        
        return count


run_test(
    ValueCount(),
    'sol2_bfs_iterative',
    test_cases,
    False
)