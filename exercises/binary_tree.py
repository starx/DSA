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
from typing import Generic, TypeVar

T = TypeVar("T")

@dataclass(slots=True)
class Node(Generic[T]):
    value: T
    left: Node[T]|None = None
    right: Node[T]|None = None