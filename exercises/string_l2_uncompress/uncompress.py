from test_runner import run_test, dprint
class Uncompress:

    def __init__(self):
        pass

    def sol1_two_pointer(self, input: str) -> str:
        n_pointer = 0
        output = ""

        while n_pointer < len(input):
            s_pointer = n_pointer + 1

            number = input[n_pointer]

            while input[s_pointer].isdigit():
                number = f"{number}{input[s_pointer]}"
                s_pointer += 1

            char = input[s_pointer]

            output += int(number) * char
            
            n_pointer = s_pointer + 1
        return output
    

    # Main Problems:
    # 
    # * String concatenation += in a loop can become O(n²) as output grows
    def sol1_two_pointer_improved(self, input: str) -> str:
        inputLen = len(input)
        n_pointer = 0

        parts = []

        while n_pointer < inputLen:
            s_pointer = n_pointer + 1
            numbers = [input[n_pointer]]

            while s_pointer < inputLen and input[s_pointer].isdigit():
                numbers.append(input[s_pointer])
                s_pointer += 1

            char = input[s_pointer]
            
            parts.append(int(''.join(numbers)) * char)
            
            n_pointer = s_pointer + 1
        return ''.join(parts)

from .test_cases import test_cases

run_test(
    Uncompress(),
    'sol1_two_pointer_improved',
    test_cases,
    False
)