from binary_tree import Node

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
i1 = Node("i")

a1.left = b1
a1.right = c1
b1.left = d1
b1.right = e1
c1.right = f1
e1.left = g1
e1.right = h1
f1.left = i1


# --------------------
# test_02
# --------------------
q2 = Node("q")
r2 = Node("r")
s2 = Node("s")
t2 = Node("t")
u2 = Node("u")
v2 = Node("v")

q2.left = r2
q2.right = s2
r2.right = t2
t2.left = u2
u2.right = v2


# --------------------
# test_03
# --------------------
z3 = Node("z")


# --------------------
# Edge cases
# --------------------

# edge_00: left-skewed tree
el0a = Node(1)
el0b = Node(2)
el0c = Node(3)
el0d = Node(4)
el0a.left = el0b
el0b.left = el0c
el0c.left = el0d
# only one path: [1,2,3,4]

# edge_01: right-skewed tree
er1a = Node(1)
er1b = Node(2)
er1c = Node(3)
er1a.right = er1b
er1b.right = er1c
# only one path: [1,2,3]

# edge_02: root has two children, both leaves
et2a = Node("root")
et2b = Node("left")
et2c = Node("right")
et2a.left = et2b
et2a.right = et2c
# paths: ["root","left"], ["root","right"]

# edge_03: deeper on one side only
ed3a = Node(10)
ed3b = Node(20)
ed3c = Node(30)
ed3d = Node(40)
ed3a.right = ed3b
ed3b.left = ed3c
ed3c.left = ed3d
# only one path: [10,20,30,40]

# edge_04: mixed values
from typing import Any

em4a: Node[Any] = Node("x")
em4b: Node[Any] = Node(1)
em4c: Node[Any] = Node(True)
em4a.left = em4b
em4a.right = em4c
# paths: ["x",1], ["x",True]


test_cases = {
    "test_00": {
        "input": [a0],
        "expected": [
            ["a", "b", "d"],
            ["a", "b", "e"],
            ["a", "c", "f"],
        ],
    },
    "test_01": {
        "input": [a1],
        "expected": [
            ["a", "b", "d"],
            ["a", "b", "e", "g"],
            ["a", "b", "e", "h"],
            ["a", "c", "f", "i"],
        ],
    },
    "test_02": {
        "input": [q2],
        "expected": [
            ["q", "r", "t", "u", "v"],
            ["q", "s"],
        ],
    },
    "test_03": {
        "input": [z3],
        "expected": [
            ["z"],
        ],
    },

    # --------------------
    # Edge cases
    # --------------------
    "edge_00": {
        "input": [el0a],
        "expected": [
            [1, 2, 3, 4],
        ],
    },
    "edge_01": {
        "input": [er1a],
        "expected": [
            [1, 2, 3],
        ],
    },
    "edge_02": {
        "input": [et2a],
        "expected": [
            ["root", "left"],
            ["root", "right"],
        ],
    },
    "edge_03": {
        "input": [ed3a],
        "expected": [
            [10, 20, 30, 40],
        ],
    },
    "edge_04": {
        "input": [em4a],
        "expected": [
            ["x", 1],
            ["x", True],
        ],
    },
}