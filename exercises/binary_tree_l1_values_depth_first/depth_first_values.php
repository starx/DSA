<?php
declare(strict_types=1);

require_once __DIR__ . "/../binary_tree.php";
require_once __DIR__ . "/../test_runner.php";

class DepthFirstValues {

    public function sol1_iterative(?Node $root): array {
        if ($root === null) return [];

        $values = [];
        $stack = [$root];

        while (!empty($stack)) {
            /** @var Node $curNode */
            $curNode = array_pop($stack);
            $values[] = $curNode->value;

            // push right first so left is processed first
            if ($curNode->right !== null) $stack[] = $curNode->right;
            if ($curNode->left !== null) $stack[] = $curNode->left;
        }

        return $values;
    }

    public function sol2_recursive(?Node $root): array {
        $values = [];
        if ($root !== null) {
            $values[] = $root->value;

            if ($root->left !== null) {
                $values = array_merge($values, $this->sol2_recursive($root->left));
            }
            if ($root->right !== null) {
                $values = array_merge($values, $this->sol2_recursive($root->right));
            }
        }
        return $values;
    }

    public function sol3_recursive_structy(?Node $root): array {
        if ($root === null) return [];

        $leftValues = $this->sol3_recursive_structy($root->left);
        $rightValues = $this->sol3_recursive_structy($root->right);

        return array_merge([$root->value], $leftValues, $rightValues);
    }
}

// Test cases

// test_00
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

// test_01
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

// test_02
$a2 = new Node('a');

// test_03
$a3 = new Node('a');
$b3 = new Node('b');
$c3 = new Node('c');
$d3 = new Node('d');
$e3 = new Node('e');

$a3->right = $b3;
$b3->left = $c3;
$c3->right = $d3;
$d3->right = $e3;

$testCases = [
    'test_00' => [
        'input' => [$a0],
        'expected' => ['a', 'b', 'd', 'e', 'c', 'f'],
    ],
    'test_01' => [
        'input' => [$a1],
        'expected' => ['a', 'b', 'd', 'e', 'g', 'c', 'f'],
    ],
    'test_02' => [
        'input' => [$a2],
        'expected' => ['a'],
    ],
    'test_03' => [
        'input' => [$a3],
        'expected' => ['a', 'b', 'c', 'd', 'e'],
    ],
    'test_04' => [
        'input' => [null],
        'expected' => [],
    ],
];

run_test(
    new DepthFirstValues(), 
    'sol2_recursive', 
    $testCases,
    false
);