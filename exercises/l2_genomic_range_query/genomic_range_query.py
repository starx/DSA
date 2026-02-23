from test_runner import run_test

class GenomicRangeQuery:

    def __init__(self):
        pass
    
    def sol1(self, S: str, P: list[int], Q: list[int]) -> list[int]:
        m = len(P)
        result = []
        for i in range(m):
            p = P[i]
            q = Q[i]

            sequence = S[p:q+1]
            if 'A' in sequence:
                result.append(1)
            elif 'C' in sequence:
                result.append(2)
            elif 'G' in sequence:
                result.append(3)
            else:
                result.append(4)
        return result
    
    # This aims to be O(N+M)
    def sol2_prefix_sum(self, S: str, P: list[int], Q: list[int]) -> list[int]:
        n = len(S)
        m = len(P)

        # First we need to build prefix sums for each nucleotide
        # prefix sum means each element at index `i` will represent a sum of all the 
        # sequence (which is occurence of nucleotide in this exercise) before it

        # For that first, we initilize sum arrays for each nucleotide, assuming 0 as sum at all positions
        prefix_A = [0] * (n + 1)
        prefix_C = [0] * (n + 1)
        prefix_G = [0] * (n + 1)
        prefix_T = [0] * (n + 1)

        # next we build the prefix sums one by one
        for i in range(n):
            # here we use current index i to build sum for i+1, because 
            # that is what we have access to

            # to build prefix sums we must first copy the previous prefix sums to the next index i+1, 
            # and then we can update the count for the current character at index i+1
            prefix_A[i+1] = prefix_A[i]
            prefix_C[i+1] = prefix_C[i]
            prefix_G[i+1] = prefix_G[i]
            prefix_T[i+1] = prefix_T[i]

            # now when we find the character at index i, we can update the count for that character in the prefix sum arrays
            if S[i] == 'A':
                prefix_A[i+1] += 1
            elif S[i] == 'C':
                prefix_C[i+1] += 1
            elif S[i] == 'G':
                prefix_G[i+1] += 1
            elif S[i] == 'T':
                prefix_T[i+1] += 1

        result = []
        for p, q in zip(P, Q):
            # logic here is that if there is any occurence of a character after index p before index q+1, then the difference would be > 0
            if prefix_A[q+1] - prefix_A[p] > 0:
                result.append(1)
            elif prefix_C[q+1] - prefix_C[p] > 0:
                result.append(2)
            elif prefix_G[q+1] - prefix_G[p] > 0:
                result.append(3)
            else:
                result.append(4)
        return result
    
from .test_cases import test_cases
run_test(
    GenomicRangeQuery(),
    'sol2_prefix_sum',
    test_cases,
    False
)