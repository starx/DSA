from linked_list import Node

a = Node("a")
b = Node("b")
c = Node("c")
a.next = b
b.next = c

x = Node("x")
y = Node("y")
z = Node("z")
x.next = y
y.next = z


a2 = Node("a")
b2 = Node("b")
c2 = Node("c")
d2 = Node("d")
e2 = Node("e")
f2 = Node("f")
a2.next = b2
b2.next = c2
c2.next = d2
d2.next = e2
e2.next = f2

x2 = Node("x")
y2 = Node("y")
z2 = Node("z")
x2.next = y2
y2.next = z2


s = Node("s")
t = Node("t")
s.next = t

one = Node(1)
two = Node(2)
three = Node(3)
four = Node(4)
one.next = two
two.next = three
three.next = four


w = Node("w")

one2 = Node(1)
two2 = Node(2)
three2 = Node(3)
one2.next = two2
two2.next = three2


one3 = Node(1)
two3 = Node(2)
three3 = Node(3)
one3.next = two3
two3.next = three3

w2 = Node("w")

# long vs short (odd length difference)
la = Node("a"); lb = Node("b"); lc = Node("c"); ld = Node("d"); le = Node("e")
la.next = lb; lb.next = lc; lc.next = ld; ld.next = le  # a -> b -> c -> d -> e

lx = Node("x")  # x
# expected: a -> x -> b -> c -> d -> e

# reverse: short vs long (head2 longer)
sa = Node("a")  # a

l1 = Node(1); l2 = Node(2); l3 = Node(3); l4 = Node(4); l5 = Node(5)
l1.next = l2; l2.next = l3; l3.next = l4; l4.next = l5  # 1 -> 2 -> 3 -> 4 -> 5
# expected: a -> 1 -> 2 -> 3 -> 4 -> 5

# equal length (bigger than tiny)
ea1 = Node("a"); ea2 = Node("b"); ea3 = Node("c"); ea4 = Node("d")
ea1.next = ea2; ea2.next = ea3; ea3.next = ea4  # a -> b -> c -> d

ex1 = Node("x"); ex2 = Node("y"); ex3 = Node("z"); ex4 = Node("w")
ex1.next = ex2; ex2.next = ex3; ex3.next = ex4  # x -> y -> z -> w
# expected: a -> x -> b -> y -> c -> z -> d -> w

# minimal non-empty lists (1 and 1)
m1 = Node("m")
n1 = Node("n")
# expected: m -> n

# duplicates + mixed types (ensure you don't rely on uniqueness)
da1 = Node(1); da2 = Node(1); da3 = Node(1)
da1.next = da2; da2.next = da3  # 1 -> 1 -> 1

dx1 = Node(1); dx2 = Node("1"); dx3 = Node(1); dx4 = Node("1")
dx1.next = dx2; dx2.next = dx3; dx3.next = dx4  # 1 -> "1" -> 1 -> "1"
# expected: 1 -> 1 -> 1 -> "1" -> 1 -> "1" -> 1

# skewed lengths (2 vs 7)
ka1 = Node("k"); ka2 = Node("k2")
ka1.next = ka2  # k -> k2

kb1 = Node("b1"); kb2 = Node("b2"); kb3 = Node("b3"); kb4 = Node("b4"); kb5 = Node("b5"); kb6 = Node("b6"); kb7 = Node("b7")
kb1.next = kb2; kb2.next = kb3; kb3.next = kb4; kb4.next = kb5; kb5.next = kb6; kb6.next = kb7
# expected: k -> b1 -> k2 -> b2 -> b3 -> b4 -> b5 -> b6 -> b7


test_cases = {
    "test_00": {
        "input": [a, x],
        "expected": ["a", "x", "b", "y", "c", "z"],
    },
    "test_01": {
        "input": [a2, x2],
        "expected": ["a", "x", "b", "y", "c", "z", "d", "e", "f"],
    },
    "test_02": {
        "input": [s, one],
        "expected": ["s", 1, "t", 2, 3, 4],
    },
    "test_03": {
        "input": [w, one2],
        "expected": ["w", 1, 2, 3],
    },
    "test_04": {
        "input": [one3, w2],
        "expected": [1, "w", 2, 3],
    },
    "test_05": {
        "input": [la, lx],
        "expected": ["a", "x", "b", "c", "d", "e"],
    },
    "test_06": {
        "input": [sa, l1],
        "expected": ["a", 1, 2, 3, 4, 5],
    },
    "test_07": {
        "input": [ea1, ex1],
        "expected": ["a", "x", "b", "y", "c", "z", "d", "w"],
    },
    "test_08": {
        "input": [m1, n1],
        "expected": ["m", "n"],
    },
    "test_09": {
        "input": [da1, dx1],
        "expected": [1, 1, 1, "1", 1, 1, "1"],
    },
    "test_10": {
        "input": [ka1, kb1],
        "expected": ["k", "b1", "k2", "b2", "b3", "b4", "b5", "b6", "b7"],
    },
}