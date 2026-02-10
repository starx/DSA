<?php
declare(strict_types=1);

require_once __DIR__ . "/../binary_tree.php";
require_once __DIR__ . "/../test_runner.php";


class HowHigh {
    public function __construct() {

    }

    public function sol1_dfs_recursive(?Node $root): int {
        if(!$root) return -1;

        $heightLeft = 0;
        $heightRight = 0;

        if($root->left) {
            $heightLeft = 1 + $this->sol1_dfs_recursive($root->left);
        }

        if($root->right) {
            $heightRight = 1 + $this->sol1_dfs_recursive($root->right);
        }

        return $heightLeft > $heightRight ? $heightLeft : $heightRight;

    }

    public function sol2_bfs_iterative(?Node $root): int {
        if(!$root) return -1;

        $queue = new SplQueue();
        $queue->enqueue($root);

        $level = 0;
        while(!$queue->isEmpty()) {
            $popCounter = $queue->count();

            while($popCounter > 0) {
                $curNode = $queue->dequeue();
                if($curNode->left) {
                    $queue->enqueue($curNode->left);
                }
                if($curNode->right) {
                    $queue->enqueue($curNode->right);
                }
                --$popCounter;
            }
            $level++;
        }

        return $level-1;

    }
    
}


$testCases = require_once __DIR__ . "/test_cases.php";
run_test(
    new HowHigh(),
    'sol2_bfs_iterative',
    $testCases,
    false
);
