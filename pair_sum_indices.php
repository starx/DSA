<?php

require_once "test_runner.php";


class PairSumIndices {

    public function sol1_hashmap(array $numbers, int $target) {
        $checked = [];
        foreach($numbers as $i => $n) {
            $rem = $target - $n;
            
            $rem_search = array_search($rem, array_keys($checked));
            if($rem_search !== false) {
                return [$rem_search, $i];
            }
            
            $checked[$n] = $i;
        }
    }

}

$cases = [
    "test1" => [
        "input" => [
            [3, 2, 5, 4, 1], 
            8
        ],
        "expected" => [0, 2]
    ],
    "test2" => [
        "input" => [
            [4, 7, 9, 2, 5, 1], 
            5
        ],
        "expected" => [0, 5]
    ],
    "test3" => [
        "input" => [
            [4, 7, 9, 2, 5, 1], 
            3
        ],
        "expected" => [3, 5]
    ],
    "test4" => [
        "input" => [
            [1, 6, 7, 2], 
            13
        ],
        "expected" => [1, 2]
    ],
    "test5" => [
        "input" => [
            [9, 9], 
            18
        ],
        "expected" => [0, 1]
    ],
    "test6" => [
        "input" => [
            range(1, 6001), 
            11999
        ],
        "expected" => [5998, 5999]
    ],
];


run_test(new PairSumIndices(), "sol1_hashmap", $cases, true);