<?php

$a = new Node("a");
$b = new Node("b");
$c = new Node("c");
$d = new Node("d");
$e = new Node("e");
$f = new Node("f");
$a->next = $b;
$b->next = $c;
$c->next = $d;
$d->next = $e;
$e->next = $f;
// a -> b -> c -> d -> e -> f


$x = new Node("x");
$y = new Node("y");
$z = new Node("z");
$x->next = $y;
$y->next = $z;
// x -> y -> z


$q = new Node("q");
$r = new Node("r");
$s = new Node("s");
$q->next = $r;
$r->next = $s;
// q -> r -> s


$node1 = new Node("h");
$node2 = new Node("i");
$node3 = new Node("j");
$node4 = new Node("i");
$node1->next = $node2;
$node2->next = $node3;
$node3->next = $node4;
// h -> i -> j -> i


$t = new Node("t");
// t


// --------------------
// Edge case tests
// --------------------

// remove from 2-node list (head)
$e1 = new Node("a");
$e2 = new Node("b");
$e1->next = $e2;
// a -> b


// remove from 2-node list (tail)
$f1 = new Node("a");
$f2 = new Node("b");
$f1->next = $f2;
// a -> b


// remove from list where target is second element
$g1 = new Node("x");
$g2 = new Node("y");
$g3 = new Node("z");
$g1->next = $g2;
$g2->next = $g3;
// x -> y -> z


// multiple duplicates in a row
$h1 = new Node("m");
$h2 = new Node("n");
$h3 = new Node("n");
$h4 = new Node("n");
$h5 = new Node("o");
$h1->next = $h2;
$h2->next = $h3;
$h3->next = $h4;
$h4->next = $h5;
// m -> n -> n -> n -> o


// numeric values
$i1 = new Node(1);
$i2 = new Node(2);
$i3 = new Node(3);
$i4 = new Node(4);
$i1->next = $i2;
$i2->next = $i3;
$i3->next = $i4;
// 1 -> 2 -> 3 -> 4


return $testCases = [
    "test_00" => [
        "input" => [$a, "c"],
        "expected" => ["a", "b", "d", "e", "f"],
    ],
    "test_01" => [
        "input" => [$x, "z"],
        "expected" => ["x", "y"],
    ],
    "test_02" => [
        "input" => [$q, "q"],
        "expected" => ["r", "s"],
    ],
    "test_03" => [
        "input" => [$node1, "i"],
        "expected" => ["h", "j", "i"],
    ],
    "test_04" => [
        "input" => [$t, "t"],
        "expected" => [],
    ],

    // --------------------
    // Edge cases
    // --------------------

    // remove head from 2-node list
    "test_05" => [
        "input" => [$e1, "a"],
        "expected" => ["b"],
    ],

    // remove tail from 2-node list
    "test_06" => [
        "input" => [$f1, "b"],
        "expected" => ["a"],
    ],

    // remove middle node (second element)
    "test_07" => [
        "input" => [$g1, "y"],
        "expected" => ["x", "z"],
    ],

    // remove first of many duplicates
    "test_08" => [
        "input" => [$h1, "n"],
        "expected" => ["m", "n", "n", "o"],
    ],

    // numeric target
    "test_09" => [
        "input" => [$i1, 3],
        "expected" => [1, 2, 4],
    ],
];