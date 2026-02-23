test_cases = {
    # --------------------
    # Codility example
    # --------------------
    "test_00_codility_example": {
        "input": ["CAGCCTA", [2, 5, 0], [4, 5, 6]],
        "expected": [2, 4, 1],
    },

    # --------------------
    # Single-character string
    # --------------------
    "test_01_single_char": {
        "input": ["A", [0], [0]],
        "expected": [1],
    },

    # --------------------
    # All same nucleotide
    # --------------------
    "test_02_all_T": {
        "input": ["TTTTT", [0, 1, 2], [4, 3, 2]],
        "expected": [4, 4, 4],
    },

    # --------------------
    # Query covers full range + subranges
    # --------------------
    "test_03_full_and_subranges": {
        "input": ["ACGTACGT", [0, 1, 2, 3], [7, 6, 5, 4]],
        # ranges:
        # 0..7 contains A => 1
        # 1..6 contains A => 1
        # 2..5 contains A => 1 (A at index 4)
        # 3..4 is T A => min is 1
        "expected": [1, 1, 1, 1],
    },

    # --------------------
    # Each query is a single index
    # --------------------
    "test_04_point_queries": {
        "input": ["ACGT", [0, 1, 2, 3], [0, 1, 2, 3]],
        "expected": [1, 2, 3, 4],
    },

    # --------------------
    # Only C and G: tests min switching
    # --------------------
    "test_05_CG_mix": {
        "input": ["GCGCCG", [0, 1, 2, 3], [0, 2, 4, 5]],
        # 0..0 = G => 3
        # 1..2 = C G => 2
        # 2..4 = G C C => 2
        # 3..5 = C C G => 2
        "expected": [3, 2, 2, 2],
    },

    # --------------------
    # Edge-ish: many queries overlapping
    # --------------------
    "test_06_overlapping_queries": {
        "input": ["TACGTA", [0, 0, 1, 2, 3], [5, 3, 4, 5, 5]],
        # 0..5 has A => 1
        # 0..3 = T A C G => 1
        # 1..4 = A C G T => 1
        # 2..5 = C G T A => 1
        # 3..5 = G T A => 1
        "expected": [1, 1, 1, 1, 1],
    },
}