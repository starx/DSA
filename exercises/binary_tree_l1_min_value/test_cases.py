from binary_tree import Node

# --------------------
# test_00
# --------------------
a0 = Node(3)
b0 = Node(11)
c0 = Node(4)
d0 = Node(4)
e0 = Node(-2)
f0 = Node(1)

a0.left = b0
a0.right = c0
b0.left = d0
b0.right = e0
c0.right = f0

# expected: -2


# --------------------
# test_01
# --------------------
a1 = Node(5)
b1 = Node(11)
c1 = Node(3)
d1 = Node(4)
e1 = Node(14)
f1 = Node(12)

a1.left = b1
a1.right = c1
b1.left = d1
b1.right = e1
c1.right = f1

# expected: 3


# --------------------
# test_02
# --------------------
a2 = Node(-1)
b2 = Node(-6)
c2 = Node(-5)
d2 = Node(-3)
e2 = Node(-4)
f2 = Node(-13)
g2 = Node(-2)
h2 = Node(-2)

a2.left = b2
a2.right = c2
b2.left = d2
b2.right = e2
c2.right = f2
e2.left = g2
f2.right = h2

# expected: -13


# --------------------
# test_03
# --------------------
a3 = Node(42)

# expected: 42


test_cases = {
    "test_00": {
        "input": [a0],
        "expected": -2,
    },
    "test_01": {
        "input": [a1],
        "expected": 3,
    },
    "test_02": {
        "input": [a2],
        "expected": -13,
    },
    "test_03": {
        "input": [a3],
        "expected": 42,
    },
}