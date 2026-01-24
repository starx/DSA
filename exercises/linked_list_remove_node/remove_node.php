<?php
declare(strict_types=1);
require_once "test_runner.php";
require_once "linked_list.php";

class RemoveNode {
    function __construct() {

    }

    function sol1_iterative(Node $head, mixed $target): array {
        $current = $head;
        $previous = null;
        while($current) {
            $cValue = $current->value;
            if($cValue === $target) {
                if(!$previous) {
                    $head = $current->next;
                    break;
                } else {
                    $previous->next = $current->next;
                    break;
                }
            }
            $previous = $current;
            $current = $current->next;
        }
        return list_to_value_array($head);

    }
}

$testCases = require(__DIR__ . "/test_cases.php");
run_test(
    new RemoveNode(),
    'sol1_iterative',
    $testCases,
    false
);