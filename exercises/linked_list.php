<?php

class Node {
    public function __construct(
        public mixed $value, 
        public ?Node $next = null
    ) {}
}