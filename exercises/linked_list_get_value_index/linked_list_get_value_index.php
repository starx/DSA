<?php

require "test_runner.php";
require "linked_list.php";

class LinkedListGetValueIndex {
    public function sol1_iterative(?Node $head, int $target): mixed {
        $i = 0;
        while($i <= $target) {
            if($i === $target) return $head->value;
            else {
                $head = $head->next;
            }
            $i++;
        }
        return null;
    }

    public function sol2_recursive(?Node $head, int $target, int $i = 0): mixed {
        
        if($head) {
            if($i === $target) {
                return $head->value;
            } else {
                return $this->sol2_recursive($head->next, $target, ++$i);
            }
        }
        return null;
    }
}

// Test cases
$a = new Node("a");
$b = new Node("b");
$c = new Node("c");
$d = new Node("d");

$a->next = $b;
$b->next = $c;
$c->next = $d;

$node1 = new Node("banana");
$node2 = new Node("mango");
$node1->next = $node2;

$testCases = [
    "test_00" => [
        "input" => [$a, 2],
        "expected" => "c",
    ],
    "test_01" => [
        "input" => [$a, 3],
        "expected" => "d",
    ],
    "test_02" => [
        "input" => [$a, 7],
        "expected" => null,
    ],
    "test_03" => [
        "input" => [$node1, 0],
        "expected" => "banana",
    ],
    "test_04" => [
        "input" => [$node1, 1],
        "expected" => "mango",
    ],
];

run_test(
    new LinkedListGetValueIndex(),
    "sol2_recursive",
    $testCases,
    false
);