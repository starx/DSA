from binary_tree import Node

# --------------------
# test_00
# --------------------
a0 = Node(12)
b0 = Node(6)
c0 = Node(6)
d0 = Node(4)
e0 = Node(6)
f0 = Node(12)

a0.left = b0
a0.right = c0
b0.left = d0
b0.right = e0
c0.right = f0

# --------------------
# test_01 (fresh nodes)
# --------------------
a1 = Node(12)
b1 = Node(6)
c1 = Node(6)
d1 = Node(4)
e1 = Node(6)
f1 = Node(12)

a1.left = b1
a1.right = c1
b1.left = d1
b1.right = e1
c1.right = f1

# --------------------
# test_02
# --------------------
a2 = Node(7)
b2 = Node(5)
c2 = Node(1)
d2 = Node(1)
e2 = Node(8)
f2 = Node(7)
g2 = Node(1)
h2 = Node(1)

a2.left = b2
a2.right = c2
b2.left = d2
b2.right = e2
c2.right = f2
e2.left = g2
f2.right = h2

# --------------------
# test_03 (fresh nodes)
# --------------------
a3 = Node(7)
b3 = Node(5)
c3 = Node(1)
d3 = Node(1)
e3 = Node(8)
f3 = Node(7)
g3 = Node(1)
h3 = Node(1)

a3.left = b3
a3.right = c3
b3.left = d3
b3.right = e3
c3.right = f3
e3.left = g3
f3.right = h3

# --------------------
# Edge cases
# --------------------

# edge_00: single node match
e0_root = Node(42)

# edge_01: single node no match
e1_root = Node(42)

# edge_02: all nodes are the target (skewed line)
e2a = Node(5)
e2b = Node(5)
e2c = Node(5)
e2d = Node(5)
e2a.right = e2b
e2b.right = e2c
e2c.right = e2d

# edge_03: all negative values, target appears multiple times
e3a = Node(-1)
e3b = Node(-2)
e3c = Node(-1)
e3d = Node(-1)
e3a.left = e3b
e3a.right = e3c
e3c.left = e3d

# edge_04: target appears only in leaves
e4a = Node(0)
e4b = Node(1)
e4c = Node(2)
e4d = Node(9)
e4e = Node(9)
e4a.left = e4b
e4a.right = e4c
e4b.left = e4d
e4c.right = e4e


test_cases = {
    "test_00": {
        "input": [a0, 6],
        "expected": 3,
    },
    "test_01": {
        "input": [a1, 12],
        "expected": 2,
    },
    "test_02": {
        "input": [a2, 1],
        "expected": 4,
    },
    "test_03": {
        "input": [a3, 9],
        "expected": 0,
    },
    "test_04": {
        "input": [None, 42],
        "expected": 0,
    },

    # --------------------
    # Edge cases
    # --------------------
    "edge_00": {
        "input": [e0_root, 42],
        "expected": 1,
    },
    "edge_01": {
        "input": [e1_root, 7],
        "expected": 0,
    },
    "edge_02": {
        "input": [e2a, 5],
        "expected": 4,
    },
    "edge_03": {
        "input": [e3a, -1],
        "expected": 3,
    },
    "edge_04": {
        "input": [e4a, 9],
        "expected": 2,
    },
}