<?php
declare(strict_types=1);

require_once __DIR__ . "/../test_runner.php";


class Compress {
    public function __construct() {

    }

    // * Start from 0
    // * Record the string
    // * Check if its string if yes 
    //     * Record the string
    //     * Increase counter
    // * When the string changes
    //     * append the previous values to the output 
    //     * reset the counter
    public function sol1_two_pointer(string $input): string {
        $inputLength = strlen($input);
        $sPointer = 0;
        $prevChar = '';
        $prevCharCount = 0;
        $outputs = [];

        while($sPointer < $inputLength) {
            $newChar = $input[$sPointer];

            if($newChar === $prevChar) {
                $prevCharCount++;
            } else {
                if($prevCharCount > 0) {
                    $output[] = ($prevCharCount > 1 ? $prevCharCount : '') . $prevChar;
                }
                $prevChar = $newChar;
                $prevCharCount = 1; 
            }
            $sPointer++;
        }
        // once the loop has ended, we need to add its current search
        if($prevCharCount > 0) {
            $output[] = ($prevCharCount > 1 ? $prevCharCount : '') . $prevChar;
        }

        return implode('', $output);

    }

}

$testCases = require_once(__DIR__ . "/test_cases.php");
run_test(
    new Compress(),
    'sol1_two_pointer',
    $testCases,
    false
);