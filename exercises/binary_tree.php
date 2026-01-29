<?php

class Node {
    function __construct(
        public mixed $value,
        public ?Node $left = null,
        public ?Node $right = null,
    ) {

    }
}

function tree_to_value_array_depth_first(?Node $root): array {
    $values = [];
    if ($root !== null) {
        $values[] = $root->value;

        if ($root->left !== null) {
            $values = array_merge($values, tree_to_value_array_depth_first($root->left));
        }
        if ($root->right !== null) {
            $values = array_merge($values, tree_to_value_array_depth_first($root->right));
        }
    }
    return $values;
}

function tree_to_value_array_breadth_first(?Node $root): array {
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

    return $values;}