<?php

class Node {
    public function __construct(
        public mixed $value, 
        public ?Node $next = null
    ) {}
}

function list_to_value_array(?Node $head = null): array {
    if(!$head) return [];
    $vArr = [];
    while($head) {
        $vArr[] = $head->value;
        $head = $head->next;
    }
    return $vArr;
} 