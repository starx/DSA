<?php
declare(strict_types=1);

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

// expected: [3, 7.5, 1]

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

// expected: [5, 32.5, 17.5, 2]

// --------------------
// test_02
// --------------------
$a2 = new Node(-1);
$b2 = new Node(-6);
$c2 = new Node(-5);
$d2 = new Node(-3);
$e2 = new Node(0);
$f2 = new Node(45);
$g2 = new Node(-1);
$h2 = new Node(-2);

$a2->left = $b2;
$a2->right = $c2;
$b2->left = $d2;
$b2->right = $e2;
$c2->right = $f2;
$e2->left = $g2;
$f2->right = $h2;

// expected: [-1, -5.5, 14, -1.5]

// --------------------
// test_03
// --------------------
$q3 = new Node(13);
$r3 = new Node(4);
$s3 = new Node(2);
$t3 = new Node(9);
$u3 = new Node(2);
$v3 = new Node(42);

$q3->left = $r3;
$q3->right = $s3;
$r3->right = $t3;
$t3->left = $u3;
$u3->right = $v3;

// expected: [13, 3, 9, 2, 42]

// --------------------
// test_04
// --------------------
// null root
// expected: []


// --------------------
// Edge cases
// --------------------

// edge_00: single node
$e0a = new Node(7);
// expected: [7]

// edge_01: two leaves (avg produces .5)
$e1a = new Node(1);
$e1b = new Node(2);
$e1c = new Node(3);
$e1a->left = $e1b;
$e1a->right = $e1c;
// expected: [1, 2.5]

// edge_02: all zeros
$e2a = new Node(0);
$e2b = new Node(0);
$e2c = new Node(0);
$e2a->left = $e2b;
$e2a->right = $e2c;
// expected: [0, 0]

// edge_03: unbalanced tree where some levels have only 1 node
$e3a = new Node(10);
$e3b = new Node(5);
$e3c = new Node(1);
$e3a->left = $e3b;
$e3b->right = $e3c;
// levels: [10], [5], [1]
// expected: [10, 5, 1]


return $testCases = [
    "test_00" => [
        "input" => [$a0],
        "expected" => [3, 7.5, 1],
    ],
    "test_01" => [
        "input" => [$a1],
        "expected" => [5, 32.5, 17.5, 2],
    ],
    "test_02" => [
        "input" => [$a2],
        "expected" => [-1, -5.5, 14, -1.5],
    ],
    "test_03" => [
        "input" => [$q3],
        "expected" => [13, 3, 9, 2, 42],
    ],
    "test_04" => [
        "input" => [null],
        "expected" => [],
    ],

    // --------------------
    // Edge cases
    // --------------------
    "edge_00" => [
        "input" => [$e0a],
        "expected" => [7],
    ],
    "edge_01" => [
        "input" => [$e1a],
        "expected" => [1, 2.5],
    ],
    "edge_02" => [
        "input" => [$e2a],
        "expected" => [0, 0],
    ],
    "edge_03" => [
        "input" => [$e3a],
        "expected" => [10, 5, 1],
    ],
];