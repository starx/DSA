debug_mode = False
def dprint(msg):
    if debug_mode:
        print(msg)
        
def run_test(solution_class_obj, solution_name, test_cases, debug: bool):

    import time
    
    debug_mode = debug
    solution_method = getattr(solution_class_obj, solution_name)

    for case_id in test_cases:
        case = test_cases[case_id]
        input = case['input']
        expected = case['expected']    
    
        start = time.perf_counter()
        result = solution_method(*input)
        success = result == expected
        end = time.perf_counter()
        exec_time = end-start
        print(f"{case_id} " + ("passed" if success else "failed") + f"\ntime taken: {exec_time}\n\n")
        if not success:
            print(f"Expected:\n\n{expected}\n\nResult:\n\n{result}\n\n")

        print("----------------------------\n\n")

# Setup
#

# from test_runner import run_test

# class ExampleExercise:
#     def sol1_desc(self, a):
#         pass


# test_cases = {
#     "case_1": {
#         "input": [...],
#         "expected": ...,
#     },
#     ...
# }

# run_test(
#     ExampleExercise(),
#     "sol1_desc",
#     test_cases,
#     False
# )

# Usage:
#
# Execute using the following:
#
# python3 -m <exercise_name>.<exercise_file>.py