<?php

require_once __DIR__ . "/../binary_tree.php";

// --------------------
// test_00
// --------------------
$a0 = new Node('a');
$b0 = new Node('b');
$c0 = new Node('c');
$d0 = new Node('d');
$e0 = new Node('e');
$f0 = new Node('f');

$a0->left = $b0;
$a0->right = $c0;
$b0->left = $d0;
$b0->right = $e0;
$c0->right = $f0;

// expected: 2

// --------------------
// test_01
// --------------------
$a1 = new Node('a');
$b1 = new Node('b');
$c1 = new Node('c');
$d1 = new Node('d');
$e1 = new Node('e');
$f1 = new Node('f');
$g1 = new Node('g');

$a1->left = $b1;
$a1->right = $c1;
$b1->left = $d1;
$b1->right = $e1;
$c1->right = $f1;
$e1->left = $g1;

// expected: 3

// --------------------
// test_02
// --------------------
$a2 = new Node('a');
$c2 = new Node('c');

$a2->right = $c2;

// expected: 1

// --------------------
// test_03
// --------------------
$a3 = new Node('a');

// expected: 0

// --------------------
// test_04
// --------------------
// null root
// expected: -1


// --------------------
// Edge cases
// --------------------

// edge_00: left-skewed chain (height = edges)
$e0a = new Node('a');
$e0b = new Node('b');
$e0c = new Node('c');
$e0d = new Node('d');
$e0a->left = $e0b;
$e0b->left = $e0c;
$e0c->left = $e0d;
// expected: 3

// edge_01: right-skewed chain
$e1a = new Node('a');
$e1b = new Node('b');
$e1c = new Node('c');
$e1a->right = $e1b;
$e1b->right = $e1c;
// expected: 2

// edge_02: unbalanced where deepest path is on one side
$e2a = new Node('a');
$e2b = new Node('b');
$e2c = new Node('c');
$e2d = new Node('d');
$e2e = new Node('e');
$e2a->left = $e2b;
$e2b->left = $e2c;
$e2a->right = $e2d;
$e2d->right = $e2e;
// deepest path a->b->c is height 2, a->d->e is height 2
// expected: 2

return $testCases = [
    "test_00" => [
        "input" => [$a0],
        "expected" => 2,
    ],
    "test_01" => [
        "input" => [$a1],
        "expected" => 3,
    ],
    "test_02" => [
        "input" => [$a2],
        "expected" => 1,
    ],
    "test_03" => [
        "input" => [$a3],
        "expected" => 0,
    ],
    "test_04" => [
        "input" => [null],
        "expected" => -1,
    ],

    // --------------------
    // Edge cases
    // --------------------
    "edge_00" => [
        "input" => [$e0a],
        "expected" => 3,
    ],
    "edge_01" => [
        "input" => [$e1a],
        "expected" => 2,
    ],
    "edge_02" => [
        "input" => [$e2a],
        "expected" => 2,
    ],
];