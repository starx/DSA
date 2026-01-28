from __future__ import annotations

# class Node:
#     def __init__(
#         self,
#         value,
#         left: Node|None = None,
#         right: Node|None = None
#     ):
#         self.value = value
#         self.left = left
#         self.right = right

from dataclasses import dataclass
from typing import Generic, TypeVar, List

T = TypeVar("T")

@dataclass(slots=True)
class Node(Generic[T]):
    value: T
    left: Node[T]|None = None
    right: Node[T]|None = None

def list_to_depth_first_value_array(root: Node[T]|None) -> List[T]:
    values: List[T] = []

    if root:
        values.append(root.value)
        values.extend(list_to_depth_first_value_array(root.left))
        values.extend(list_to_depth_first_value_array(root.right))

    return values

def list_to_breadth_first_value_array(self, root: Node[T]|None)->List[T]:
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