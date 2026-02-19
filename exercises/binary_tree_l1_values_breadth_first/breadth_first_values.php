<?php
declare(strict_types=1);

require_once __DIR__ . "/../binary_tree.php";
require_once __DIR__ . "/../test_runner.php";


class BreadthFirstValues {

    // naive queue (O(n^2) due to array_shift)
    public function sol1_iterative(?Node $root): array {
        $values = [];
        $queue = [];

        if ($root !== null) {
            $queue[] = $root;
        }

        while (!empty($queue)) {
            // array_shift is O(n)
            /** @var Node $currNode */
            $currNode = array_shift($queue);
            $values[] = $currNode->value;

            if ($currNode->left !== null) {
                $queue[] = $currNode->left;
            }

            if ($currNode->right !== null) {
                $queue[] = $currNode->right;
            }
        }

        return $values;
    }

    // SplQueue (O(n))
    public function sol2_iterative_improved(?Node $root): array {
        $values = [];
        $queue = new SplQueue();

        if ($root !== null) {
            $queue->enqueue($root);
        }

        while (!$queue->isEmpty()) {
            /** @var Node $currNode */
            $currNode = $queue->dequeue();
            $values[] = $currNode->value;

            if ($currNode->left !== null) {
                $queue->enqueue($currNode->left);
            }

            if ($currNode->right !== null) {
                $queue->enqueue($currNode->right);
            }
        }

        return $values;
    }
}

// Test cases

// test_00
$a0 = new Node("a");
$b0 = new Node("b");
$c0 = new Node("c");
$d0 = new Node("d");
$e0 = new Node("e");
$f0 = new Node("f");

$a0->left = $b0;
$a0->right = $c0;
$b0->left = $d0;
$b0->right = $e0;
$c0->right = $f0;

// test_01
$a1 = new Node("a");
$b1 = new Node("b");
$c1 = new Node("c");
$d1 = new Node("d");
$e1 = new Node("e");
$f1 = new Node("f");
$g1 = new Node("g");
$h1 = new Node("h");

$a1->left = $b1;
$a1->right = $c1;
$b1->left = $d1;
$b1->right = $e1;
$c1->right = $f1;
$e1->left = $g1;
$f1->right = $h1;

// test_02
$a2 = new Node("a");

// test_03
$a3 = new Node("a");
$b3 = new Node("b");
$c3 = new Node("c");
$d3 = new Node("d");
$e3 = new Node("e");
$x3 = new Node("x");

$a3->right = $b3;
$b3->left = $c3;
$c3->left = $x3;
$c3->right = $d3;
$d3->right = $e3;

// test_04

$testCases = [
    "test_00" => [
        "input" => [$a0],
        "expected" => ["a", "b", "c", "d", "e", "f"],
    ],
    "test_01" => [
        "input" => [$a1],
        "expected" => ["a", "b", "c", "d", "e", "f", "g", "h"],
    ],
    "test_02" => [
        "input" => [$a2],
        "expected" => ["a"],
    ],
    "test_03" => [
        "input" => [$a3],
        "expected" => ["a", "b", "c", "x", "d", "e"],
    ],
    "test_04" => [
        "input" => [null],
        "expected" => [],
    ],
];

run_test(
    new BreadthFirstValues(),
    'sol2_iterative_improved',
    $testCases,
    false
);