test_cases = {
    # --------------------
    # Codility example
    # --------------------
    "test_00_codility_example": {
        "input": [[1, 5, 2, 1, 4, 0]],
        "expected": 11,
    },

    # --------------------
    # Edge cases
    # --------------------

    # edge_00: empty array (N = 0)
    "edge_00_empty": {
        "input": [[]],
        "expected": 0,
    },

    # edge_01: single disc
    "edge_01_single": {
        "input": [[0]],
        "expected": 0,
    },

    # edge_02: all zero radii => no intersections
    "edge_02_all_zero": {
        "input": [[0, 0, 0, 0, 0]],
        "expected": 0,
    },

    # edge_03: touching counts as intersection (borders included)
    # disc0 center=0 radius=1 => [-1, 1]
    # disc1 center=1 radius=0 => [1, 1]  share point at 1
    "edge_03_touching": {
        "input": [[1, 0]],
        "expected": 1,
    },

    # edge_04: also touching (reverse)
    "edge_04_touching_reverse": {
        "input": [[0, 1]],
        "expected": 1,
    },

    # edge_05: small increasing radii
    "edge_05_small_increasing": {
        "input": [[1, 2, 3, 4]],
        "expected": 6,
    },

    # edge_06: exceeds 10,000,000 intersections => -1
    # If all discs intersect, intersections = n*(n-1)/2.
    # Smallest n with n*(n-1)/2 > 10_000_000 is 4473 (gives 10,001,628).
    # Use a huge radius so every disc overlaps every other disc.
    "edge_06_over_limit": {
        "input": [[10**9] * 4473],
        "expected": -1,
    },
}