<?php

$debug_mode = false;

function dprint($msg) {
    global $debug_mode;
    if($debug_mode === true) {
        print($msg);
    }
}

function run_test(
    $solution_class_obj, 
    string $solution_name, 
    array $test_cases, 
    bool $debug,
    ?callable $resultOverride = null
) {
    global $debug_mode;
    $debug_mode = $debug;

    foreach($test_cases as $case_id => $case) {
        $input = $case['input'];
        $expected = $case['expected'];
    
        $start = microtime(true);
        $result = call_user_func_array([$solution_class_obj, $solution_name], $input);
        if($resultOverride) {
            $result = $resultOverride($result);
        }
        
        $success = $result === $expected;
        $end = microtime(true);
        $exec_time = $end-$start;
        print("{$case_id} " . ($success ? "passed" : "failed") . "\ntime taken: {$exec_time}\n\n");


        if(!$success) {
            print("Expected:\n\n".var_export($expected, true)."\n\nResult:\n\n".var_export($result, true)."\n\n");
        }

        print("----------------------------\n\n");
    }

}

// <?php

// require_once "test_runner.php";


// class Problem {

//     public function sol1_hashmap(...) {
//         return ...
//     }

// }

// $cases = [
//     "test1" => [
//         "input" => [
//             ..., 
//             ...
//         ],
//         "expected" => ...
//     ],
// ];


// run_test(new Problem(), "sol1", $cases, true);