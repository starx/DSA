<?php

return $testCases = [

    // --------------------
    // Given tests
    // --------------------
    "test_00" => [
        "input" => ["ccaaatsss"],
        "expected" => "2c3at3s",
    ],
    "test_01" => [
        "input" => ["ssssbbz"],
        "expected" => "4s2bz",
    ],
    "test_02" => [
        "input" => ["ppoppppp"],
        "expected" => "2po5p",
    ],
    "test_03" => [
        "input" => ["nnneeeeeeeeeeeezz"],
        "expected" => "3n12e2z",
    ],
    "test_04" => [
        "input" => [str_repeat("y", 127)],
        "expected" => "127y",
    ],

    // --------------------
    // Edge cases
    // --------------------

    // edge_00: single character
    "edge_00" => [
        "input" => ["a"],
        "expected" => "a",
    ],

    // edge_01: all unique characters
    "edge_01" => [
        "input" => ["abcdef"],
        "expected" => "abcdef",
    ],

    // edge_02: two characters same
    "edge_02" => [
        "input" => ["aa"],
        "expected" => "2a",
    ],

    // edge_03: alternating pattern
    "edge_03" => [
        "input" => ["ababab"],
        "expected" => "ababab",
    ],

    // edge_04: large block then singles
    "edge_04" => [
        "input" => ["aaaaab"],
        "expected" => "5ab",
    ],

    // edge_05: mixed sizes
    "edge_05" => [
        "input" => ["aaabbccccd"],
        "expected" => "3a2b4cd",
    ],

    // edge_06: very large count
    "edge_06" => [
        "input" => [str_repeat("z", 500)],
        "expected" => "500z",
    ],

    // edge_07: two large groups
    "edge_07" => [
        "input" => [str_repeat("a", 20) . str_repeat("b", 15)],
        "expected" => "20a15b",
    ],

];