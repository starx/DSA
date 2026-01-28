<?php

class Node {
    function __construct(
        public mixed $value,
        public ?Node $left = null,
        public ?Node $right = null,
    ) {

    }
}