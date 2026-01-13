from typing import List
class IntersectionWithDupes:
  def sol1(self, a: List[str], b: List[str]) -> List[str]:
    intersect = []
    for i in a:
      try:
        i_index = b.index(i)
        intersect.append(i)
        b.pop(i_index)
      except:
        pass

    return intersect

  def sol2_hash_frequency_counter(self, a: List[str], b: List[str]) -> List[str]: 
    from collections import Counter
    b_counter = Counter(b)

    intersect = []

    for i in a:
      if i in b_counter and b_counter[i] > 0:
        intersect.append(i)
        b_counter[i] -= 1
    
    return intersect


test_cases = {
    "test_00": {
        "input": (["a", "b", "c", "b"], ["x", "y", "b", "b"]),
        "expected": ["b", "b"],
    },
    "test_01": {
        "input": (["q", "b", "m", "s", "s", "s"], ["s", "m", "s"]),
        "expected": ["m", "s", "s"],
    },
    "test_02": {
        "input": (["p", "r", "r", "r"], ["r"]),
        "expected": ["r"],
    },
    "test_03": {
        "input": (["r"], ["p", "r", "r", "r"]),
        "expected": ["r"],
    },
    "test_04": {
        "input": (["t", "v", "u"], ["g", "e", "d", "f"]),
        "expected": [],
    },
    "test_05": {
        "input": (["a", "a", "a", "a", "a", "a"], ["a", "a", "a", "a"]),
        "expected": ["a", "a", "a", "a"],
    },
    "test_06_large": {
        "input": (
            [str(i) for i in range(20000)],
            [str(i) for i in range(20000)],
        ),
        "expected": [str(i) for i in range(20000)],
    },
}

from test_runner import dprint, run_test
run_test(IntersectionWithDupes(), 'sol2_hash_frequency_counter', test_cases, False)