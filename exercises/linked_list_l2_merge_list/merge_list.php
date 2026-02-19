<?php

require_once "linked_list.php";
require_once "test_runner.php";

class MergeList {
    function __construct() {}

    function sol1_iterative(?Node $a, ?Node $b) {
        $head = null;
        if($a) $head = $a;
        else $head = b;

        $maxIteration = 100;
        $iteration = 0;
        // We will construct a new list, of whose head & current are currently null
        // we can ignore tail as it's not relevant
        $head = null;
        $current = null;
        while (($a || $b) && $iteration < $maxIteration) {
            if(!$a && !$b) {
                break;
            }
            if(!$a) { 
                $currentSmallest = $b;
            } elseif(!$b) {
                $currentSmallest = $a;
            } else {
                $currentSmallest = $a->value < $b->value ? $a : $b;
            }


            if(!$head && !$current) {
                // In the first run, our currentSmallest node is both
                // the head and the current pointer
                $head = $currentSmallest;
                $current = $currentSmallest;
            } else {
                $current->next = $currentSmallest;
                $current = $currentSmallest;
            }

            // Whichever head was the smallest, pick its next value 
            // So that, we can keep comparing it with the larger value
            if ($currentSmallest === $a) $a = $a->next;
            else $b = $b->next;


            ++$iteration;
        }

        return list_to_value_array($head);
    }
}

//
// test_00
//
$a0 = new Node(5);
$b0 = new Node(7);
$c0 = new Node(10);
$d0 = new Node(12);
$e0 = new Node(20);
$f0 = new Node(28);
$a0->next = $b0;
$b0->next = $c0;
$c0->next = $d0;
$d0->next = $e0;
$e0->next = $f0;

$q0 = new Node(6);
$r0 = new Node(8);
$s0 = new Node(9);
$t0 = new Node(25);
$q0->next = $r0;
$r0->next = $s0;
$s0->next = $t0;

//
// test_01
//
$a1 = new Node(5);
$b1 = new Node(7);
$c1 = new Node(10);
$d1 = new Node(12);
$e1 = new Node(20);
$f1 = new Node(28);
$a1->next = $b1;
$b1->next = $c1;
$c1->next = $d1;
$d1->next = $e1;
$e1->next = $f1;

$q1 = new Node(1);
$r1 = new Node(8);
$s1 = new Node(9);
$t1 = new Node(10);
$q1->next = $r1;
$r1->next = $s1;
$s1->next = $t1;

//
// test_02
//
$h2 = new Node(30);

$p2 = new Node(15);
$q2 = new Node(67);
$p2->next = $q2;

$testCases = [
    "test_00" => [
        "input" => [$a0, $q0],
        "expected" => [5, 6, 7, 8, 9, 10, 12, 20, 25, 28],
    ],
    "test_01" => [
        "input" => [$a1, $q1],
        "expected" => [1, 5, 7, 8, 9, 10, 10, 12, 20, 28],
    ],
    "test_02" => [
        "input" => [$h2, $p2],
        "expected" => [15, 30, 67],
    ],
];

run_test(
    new MergeList(),
    'sol1_iterative',
    $testCases,
    false
);