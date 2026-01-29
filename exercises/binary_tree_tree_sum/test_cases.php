<?php

// --------------------
// test_00
// --------------------
$a0 = new Node(3);
$b0 = new Node(11);
$c0 = new Node(4);
$d0 = new Node(4);
$e0 = new Node(-2);
$f0 = new Node(1);

$a0->left = $b0;
$a0->right = $c0;
$b0->left = $d0;
$b0->right = $e0;
$c0->right = $f0;

// expected: 21

// --------------------
// test_01
// --------------------
$a1 = new Node(1);
$b1 = new Node(6);
$c1 = new Node(0);
$d1 = new Node(3);
$e1 = new Node(-6);
$f1 = new Node(2);
$g1 = new Node(2);
$h1 = new Node(2);

$a1->left = $b1;
$a1->right = $c1;
$b1->left = $d1;
$b1->right = $e1;
$c1->right = $f1;
$e1->left = $g1;
$f1->right = $h1;

// expected: 10

// --------------------
// test_02
// --------------------
// null tree
// expected: 0


// --------------------
// Edge cases
// --------------------

// test_03: single node
$e3 = new Node(5);
// expected: 5

// test_04: all negative values
$e4a = new Node(-1);
$e4b = new Node(-2);
$e4c = new Node(-3);
$e4a->left = $e4b;
$e4a->right = $e4c;
// expected: -6

// test_05: left-skewed tree
$e5a = new Node(10);
$e5b = new Node(5);
$e5c = new Node(1);
$e5a->left = $e5b;
$e5b->left = $e5c;
// expected: 16

// test_06: right-skewed tree
$e6a = new Node(7);
$e6b = new Node(3);
$e6c = new Node(2);
$e6a->right = $e6b;
$e6b->right = $e6c;
// expected: 12


$testCases = [
    "test_00" => [
        "input" => [$a0],
        "expected" => 21,
    ],
    "test_01" => [
        "input" => [$a1],
        "expected" => 10,
    ],
    "test_02" => [
        "input" => [null],
        "expected" => 0,
    ],
    // -------- edge cases --------
    "test_03" => [
        "input" => [$e3],
        "expected" => 5,
    ],
    "test_04" => [
        "input" => [$e4a],
        "expected" => -6,
    ],
    "test_05" => [
        "input" => [$e5a],
        "expected" => 16,
    ],
    "test_06" => [
        "input" => [$e6a],
        "expected" => 12,
    ],
];