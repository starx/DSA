<?php

require_once "test_runner.php";
require_once "linked_list.php";


class LinkedListValues {

    public function sol1_iterative(?Node $head): array {
        $values = [];
        while($head) {
            $values[] = $head->value;
            $head = $head->next;
        }
        return $values;
    }

    public function sol2_recursive(?Node $head): array {
        if ($head) {
            return [$head->value, ...$this->sol2_recursive($head->next)];
        }
        return [];
    }

    public function sol3_recursive_with_accumulator(?Node $head, $acc = []): array {
        if ($head) {
            $acc[] = $head->value;
            return $this->sol3_recursive_with_accumulator($head->next, $acc);
        }
        return $acc;
    }



}

$a = new Node("a");
$b = new Node("b");
$c = new Node("c");
$d = new Node("d");
$a->next = $b;
$b->next = $c;
$c->next = $d;

$x = new Node("x");
$y = new Node("y");
$x->next = $y;

$q = new Node("q");

$testCases = [
    "case_1" => [
        "input" => [$a],
        "expected" => ["a", "b", "c", "d"],
    ],
    "case_2" => [
        "input" => [$x],
        "expected" => ["x", "y"],
    ],
    "case_3" => [
        "input" => [$q],
        "expected" => ["q"],
    ],
    "case_4" => [
        "input" => [null],
        "expected" => [],
    ],
];


run_test(new LinkedListValues(), "sol3_recursive_with_accumulator", $testCases, true);