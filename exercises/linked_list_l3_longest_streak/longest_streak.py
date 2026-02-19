from test_runner import run_test, dprint
from linked_list import Node
from typing import Any

class LongestStreak:
    def sol1_iterative(self, head: Node) -> int:
        current = head # At first run current pointer is head of the list
 
        lastValue: None|Any = None
        currentStreak: None|int = None
        longestStreak: None|int = None
        while(current):
            cValue = current.value

            if lastValue is None and currentStreak is None and longestStreak is None:
                lastValue = cValue
                currentStreak = 1
                longestStreak = 1
                
            else:
                assert currentStreak is not None
                assert longestStreak is not None

                if lastValue == cValue:
                    currentStreak += 1
                    if currentStreak > longestStreak:
                        longestStreak += currentStreak
                else:
                    currentStreak = 1

                lastValue = cValue

            current = current.next # Advance to next item
        
        assert longestStreak is not None
        return longestStreak


# Test cases
a1 = Node(5)
b1 = Node(5)
c1 = Node(7)
d1 = Node(7)
e1 = Node(7)
f1 = Node(6)

a1.next = b1
b1.next = c1
c1.next = d1
d1.next = e1
e1.next = f1


a2 = Node(3)
b2 = Node(3)
c2 = Node(3)
d2 = Node(3)
e2 = Node(9)
f2 = Node(9)

a2.next = b2
b2.next = c2
c2.next = d2
d2.next = e2
e2.next = f2


a3 = Node(9)
b3 = Node(9)
c3 = Node(1)
d3 = Node(9)
e3 = Node(9)
f3 = Node(9)

a3.next = b3
b3.next = c3
c3.next = d3
d3.next = e3
e3.next = f3


a4 = Node(5)
b4 = Node(5)
a4.next = b4


a5 = Node(4)


test_cases = {
    "test_00": {
        "input": [a1],
        "expected": 3,
    },
    "test_01": {
        "input": [a2],
        "expected": 4,
    },
    "test_02": {
        "input": [a3],
        "expected": 3,
    },
    "test_03": {
        "input": [a4],
        "expected": 2,
    },
    "test_04": {
        "input": [a5],
        "expected": 1,
    },
    "test_05": {
        "input": [None],
        "expected": 0,
    },
}

run_test(
    LongestStreak(),
    'sol1_iterative',
    test_cases,
    False
);