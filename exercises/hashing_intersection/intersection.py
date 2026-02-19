class Intersection:
  
  def sol1_brute_force  (self, a, b):
    intersect = []
    for i in a:
      if i in b:
        intersect.append(i)
    
    intersect.sort()
    return intersect
  
  def sol2_set  (self, a, b):
    set_a = set(a)
    intersect = []
    for i in b:
      if i in set_a:
        intersect.append(i)
    
    intersect.sort()
    return intersect
    

test_cases = {
    "case_1_basic_overlap": {
        "input": ([4, 2, 1, 6], [3, 6, 9, 2, 10]),
        "expected": [2, 6],
    },
    "case_2_order_from_first": {
        "input": ([2, 4, 6], [4, 2]),
        "expected": [2, 4],
    },
    "case_3_superset": {
        "input": ([4, 2, 1], [1, 2, 4, 6]),
        "expected": [1, 2, 4],
    },
    "case_4_no_intersection": {
        "input": ([0, 1, 2], [10, 11]),
        "expected": [],
    },
    "case_5_large_equal_lists": {
        "input": (
            [i for i in range(0, 50000)],
            [i for i in range(0, 50000)]
        ),
        "expected": [i for i in range(0, 50000)],
    },
}


from test_runner import run_test
run_test(Intersection(), 'sol1_brute_force', test_cases, False)