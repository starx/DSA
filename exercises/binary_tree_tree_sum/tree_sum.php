<?php

require_once __DIR__ . "/../binary_tree.php";
require_once __DIR__ . "/../test_runner.php";
require_once __DIR__ . "/test_cases.php";

class TreeSum {

    function sol1_depth_first_recursive(?Node $root) {
        $sum = 0;
        if(!$root) return $sum;

        $sum += $root->value;

        if($root->left) {
            $sum += $this->sol1_depth_first_recursive($root->left);
        }
        if($root->right) {
            $sum += $this->sol1_depth_first_recursive($root->right);
        }

        return $sum;
    }

    function sol2_breadth_first_iterative(?Node $root) {
        $sum = 0;
        $queue = new SplQueue();
        
        if($root) {
            $queue->enqueue($root);
        }

        while(!$queue->isEmpty()) {
            $currNode = $queue->dequeue();
            $sum += $currNode->value;

            if($currNode->left) $queue->enqueue($currNode->left);
            if($currNode->right) $queue->enqueue($currNode->right);
        }

        return $sum;
    }

}

run_test(
    new TreeSum(),
    'sol2_breadth_first_iterative',
    $testCases,
    false
);