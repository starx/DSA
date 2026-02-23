class NoOfDiscIntersections:

    def __init__(self):
        pass

    def sol1_brute_force(self, A: list[int]) -> int:
        N = len(A)

        # First we need to calculate the ranges for each disc, which is defined by its center and radius.
        ranges = []
        for i, n in enumerate(A):
            ranges.append((i - n, i + n))
        
        count = 0
        for i in range(N):
            for j in range(i+1, N):
                circle1 = ranges[i] # l1, r1
                circle2 = ranges[j] # l2, r2
                # If the circles do not intersect, then one of the following must be true:
                # - The right edge of circle1 is to the left of the left edge of circle2: r1 < l2
                # - The left edge of circle1 is to the right of the right edge of circle2: l1 > r2
                if circle1[1] < circle2[0] or circle1[0] > circle2[1]:
                    continue
                else:
                    count += 1
                    if count > 10000000:
                        return -1


        return count
    
from test_runner import run_test
from .test_cases import test_cases
run_test(
    NoOfDiscIntersections(),
    'sol1_brute_force',
    test_cases,
    False
)