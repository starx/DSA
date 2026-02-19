from binary_tree import Node
from test_runner import run_test
from .test_cases import test_cases

from typing import List, TypeVar, Generic

T = TypeVar("T");

class AllTreePath(Generic[T]):
    def __init__(self):
        pass

    def sol1_dfs_recursive_accumulator(
            self, 
            root: Node[T]|None, 
            currentPath: List[T]|None = None, 
            allPaths: List[List[T]]|None = None
        ) -> List[List[T]]:
        
        if not root:
            return []
        
        if currentPath is None:
            currentPath = []

        if allPaths is None:
            allPaths = []

        if root.left is None and root.right is None:
            currentPath.append(root.value)
            allPaths.append(currentPath)
        
        if root.left:
            self.sol1_dfs_recursive_accumulator(root.left, [*currentPath, root.value], allPaths)
        
        if root.right:
            self.sol1_dfs_recursive_accumulator(root.right, [*currentPath, root.value], allPaths)

        return allPaths
    
    def sol1_dfs_recursive_accumulator_improved(
            self, 
            root: Node[T]|None
        ) -> List[List[T]]:
        
        if not root:
            return []
        
        currentPath: List[T] = []
        allPaths: List[List[T]] = []

        def dfs(root):
            currentPath.append(root.value)

            if root.left is None and root.right is None:
                # if leaf node
                allPaths.append(currentPath.copy())
        
            dfs(root.left)
            dfs(root.right)

            # backtrack
            currentPath.pop()

        dfs(root)
        return allPaths

run_test(
    AllTreePath(),
    'sol1_dfs_recursive_accumulator_improved',
    test_cases,
    False
)