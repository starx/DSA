<?php
declare(strict_types=1);

require_once __DIR__ . "/../binary_tree.php";
require_once __DIR__ . "/../test_runner.php";

class LevelAverages {
    public function __construct() {

    }

    public function sol1_bfs(?Node $root = null): array {
        if(is_null($root)) return [];

        $queue = new SplQueue();
        $queue->enqueue($root);

        $levelAverage = [];

        while($queueCount = $queue->count()) {
            $loopLimit = $queueCount;
            $levelTotal = 0;

            while($loopLimit > 0) {
                $curNode = $queue->dequeue();
                $levelTotal += $curNode->value;

                if($curNode->left) {
                    $queue->enqueue($curNode->left);
                }
                
                if($curNode->right) {
                    $queue->enqueue($curNode->right);
                }

                $loopLimit--;
            }

            $levelAverage[] = $levelTotal / $queueCount;
        }

        return $levelAverage;

    }
}

$testCases = require_once __DIR__ . "/test_cases.php";
run_test(
    new LevelAverages(),
    'sol1_bfs',
    $testCases,
    false
);

