test_cases = {
    # --------------------
    # Given tests
    # --------------------
    "test_00": {
        "input": ["2c3a1t"],
        "expected": "ccaaat",
    },
    "test_01": {
        "input": ["4s2b"],
        "expected": "ssssbb",
    },
    "test_02": {
        "input": ["2p1o5p"],
        "expected": "ppoppppp",
    },
    "test_03": {
        "input": ["3n12e2z"],
        "expected": "nnneeeeeeeeeeeezz",
    },
    "test_04": {
        "input": ["127y"],
        "expected": "y" * 127,
    },

    # --------------------
    # Edge cases
    # --------------------

    # edge_00: single group
    "edge_00": {
        "input": ["5a"],
        "expected": "aaaaa",
    },

    # edge_01: multiple single counts
    "edge_01": {
        "input": ["1a1b1c1d"],
        "expected": "abcd",
    },

    # edge_02: multi-digit numbers
    "edge_02": {
        "input": ["10x2y"],
        "expected": "x" * 10 + "yy",
    },

    # edge_03: large count
    "edge_03": {
        "input": ["50z"],
        "expected": "z" * 50,
    },

    # edge_04: letters mixed with digits in pattern
    "edge_04": {
        "input": ["2a3b4c"],
        "expected": "aabbbcccc",
    },

    # edge_05: single character result
    "edge_05": {
        "input": ["1q"],
        "expected": "q",
    },

    # edge_06: repeated different chars
    "edge_06": {
        "input": ["2a2b2c2d"],
        "expected": "aabbccdd",
    },
}