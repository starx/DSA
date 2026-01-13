<?php
declare(strict_types=1);

require_once "test_runner.php";

class ExclusiveItems {
    public function sol1_bruteforce(array $a, array $b) {
        $exclusives = [];
        foreach($a as $i) {
            if(!in_array($i, $exclusives) && !in_array($i, $b)) {
                $exclusives[] = $i;
            }
        }

        foreach($b as $i) {
            if(!in_array($i, $exclusives) && !in_array($i, $a)) {
                $exclusives[] = $i;
            }
        }

        return $exclusives;

    }

    public function sol2_linear(array $a, array $b) {
        $seenInA = [];
        $seenInB = [];
        $exclusives = [];

        foreach($a as $i) {
            $seenInA[$i] = true;
        }

        foreach($b as $i) {
            $seenInB[$i] = true;
        }

        foreach($a as $i) {
            if(!isset($seenInB[$i])) {
                $exclusives[] = $i;
            }
        }

        foreach($b as $i) {
            if(!isset($seenInA[$i])) {
                $exclusives[] = $i;
            }
        }

        return $exclusives;

    }

    public function sol3_linear_nodups(array $a, array $b) {
        $seenInA = [];
        $seenInB = [];
        $exclusives = [];
        $added = [];

        foreach($a as $i) {
            $seenInA[$i] = true;
        }

        foreach($b as $i) {
            $seenInB[$i] = true;
        }

        foreach($a as $i) {
            if(!isset($seenInB[$i]) && !isset($added[$i])) {
                $exclusives[] = $i;
                $added[$i] = true;
            }
        }

        foreach($b as $i) {
            if(!isset($seenInA[$i]) && !isset($added[$i])) {
                $exclusives[] = $i;
                $added[$i] = true;
            }
        }

        return $exclusives;

    }
}

$cases = [
    "test_00" => [
        "input" => [
            [4, 2, 1, 6],
            [3, 6, 9, 2, 10],
        ],
        "expected" => [4, 1, 3, 9, 10],
    ],

    "test_01" => [
        "input" => [
            [2, 4, 6],
            [4, 2],
        ],
        "expected" => [6],
    ],

    "test_02" => [
        "input" => [
            [4, 2, 1],
            [1, 2, 4, 6],
        ],
        "expected" => [6],
    ],

    "test_03" => [
        "input" => [
            [0, 1, 2],
            [10, 11],
        ],
        "expected" => [0, 1, 2, 10, 11],
    ],

    "test_04_large_equal_arrays" => [
        "input" => [
            range(0, 59999),
            range(0, 59999),
        ],
        "expected" => [],
    ],
];


run_test(new ExclusiveItems(), 'sol3_linear_nodups', $cases, false);