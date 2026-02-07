<?php
declare(strict_types=1);

require_once __DIR__ . "/../binary_tree.php";
require_once __DIR__ . "/../test_runner.php";

class MaxPathSum {
    function __construct() {

    }

    function sol1_recursive(?Node $root = null, $pathSum = 0) {
        if(!$root) {
            return $pathSum;
        }

        $pathSum += $root->value;
        $sumLeft = null;
        $sumRight = null;

        if($root->left) {
            $sumLeft = $this->sol1_recursive($root->left, $pathSum);
        }
        if($root->right) {
            $sumRight = $this->sol1_recursive($root->right, $pathSum);
        }

        if(!is_null($sumLeft) && !is_null($sumRight)) {
            return $sumLeft > $sumRight ? $sumLeft : $sumRight;
        }
        if(!is_null($sumLeft)) return $sumLeft;
        if(!is_null($sumRight)) return $sumRight;
        return $pathSum;
    }

    function sol2_recursive_structural(?Node $root): int {
        if ($root === null) {
            return PHP_INT_MIN; // equivalent of -Infinity for max comparison
        }

        if ($root->left === null && $root->right === null) {
            return $root->value;
        }

        return $root->value + max(
            $this->sol2_recursive_structural($root->left),
            $this->sol2_recursive_structural($root->right)
        );
    }
}

$test_cases = require_once(__DIR__ . "/test_cases.php");
run_test(
    new MaxPathSum(),
    "sol2_recursive_structural",
    $test_cases,
    false
);