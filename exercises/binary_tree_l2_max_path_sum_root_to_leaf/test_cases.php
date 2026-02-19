<?php

require_once __DIR__ . "/../binary_tree.php";

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

// expected: 18  (3 -> 11 -> 4)

// --------------------
// test_01
// --------------------
$a1 = new Node(5);
$b1 = new Node(11);
$c1 = new Node(54);
$d1 = new Node(20);
$e1 = new Node(15);
$f1 = new Node(1);
$g1 = new Node(3);

$a1->left = $b1;
$a1->right = $c1;
$b1->left = $d1;
$b1->right = $e1;
$e1->left = $f1;
$e1->right = $g1;

// expected: 59  (5 -> 54)

// --------------------
// test_02
// --------------------
$a2 = new Node(-1);
$b2 = new Node(-6);
$c2 = new Node(-5);
$d2 = new Node(-3);
$e2 = new Node(0);
$f2 = new Node(-13);
$g2 = new Node(-1);
$h2 = new Node(-2);

$a2->left = $b2;
$a2->right = $c2;
$b2->left = $d2;
$b2->right = $e2;
$c2->right = $f2;
$e2->left = $g2;
$f2->right = $h2;

// expected: -8  (-1 -> -6 -> 0 -> -1)

// --------------------
// test_03
// --------------------
$a3 = new Node(42);

// expected: 42

// --------------------
// Edge cases
// --------------------

// test_04: all-negative straight line
$e4a = new Node(-10);
$e4b = new Node(-5);
$e4c = new Node(-1);
$e4a->right = $e4b;
$e4b->right = $e4c;
// expected: -16

// test_05: left-skewed positive
$e5a = new Node(1);
$e5b = new Node(2);
$e5c = new Node(3);
$e5d = new Node(4);
$e5a->left = $e5b;
$e5b->left = $e5c;
$e5c->left = $e5d;
// expected: 10

// test_06: choose between shallow vs deep path
$e6a = new Node(5);
$e6b = new Node(100);
$e6c = new Node(1);
$e6d = new Node(1);
$e6a->left = $e6b;   // shallow but large
$e6a->right = $e6c;  // deeper but smaller
$e6c->right = $e6d;
// expected: 105  (5 -> 100)

// test_07: zero-heavy tree
$e7a = new Node(0);
$e7b = new Node(0);
$e7c = new Node(0);
$e7a->left = $e7b;
$e7a->right = $e7c;
// expected: 0


$testCases = [
    "test_00" => [
        "input" => [$a0],
        "expected" => 18,
    ],
    "test_01" => [
        "input" => [$a1],
        "expected" => 59,
    ],
    "test_02" => [
        "input" => [$a2],
        "expected" => -8,
    ],
    "test_03" => [
        "input" => [$a3],
        "expected" => 42,
    ],
    // -------- edge cases --------
    "test_04" => [
        "input" => [$e4a],
        "expected" => -16,
    ],
    "test_05" => [
        "input" => [$e5a],
        "expected" => 10,
    ],
    "test_06" => [
        "input" => [$e6a],
        "expected" => 105,
    ],
    "test_07" => [
        "input" => [$e7a],
        "expected" => 0,
    ],
];

return $testCases;