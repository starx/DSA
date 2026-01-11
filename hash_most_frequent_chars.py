class MostFrequentChar:
  
  def sol1_char_count_in_dict(self, s):
    char_count = {}
    for i in range(len(s)):
      ch = s[i]
      if not ch in char_count:
        char_count[ch] = 0
  
      char_count[ch] += 1
  
    frequent_char_count = 0;
    frequent_char = None;
  
    for ch in char_count:
      if char_count[ch] > frequent_char_count:
        frequent_char = ch
        frequent_char_count = char_count[ch]
  
    return frequent_char

  def sol2_counter(self, s):
    from collections import Counter
    counter = Counter(s)
  
    frequent_char_count = 0;
    frequent_char = None;
  
    for ch in counter:
      if counter[ch] > frequent_char_count:
        frequent_char = ch
        frequent_char_count = counter[ch]
  
    return frequent_char

cases = {
    "test1": {
        "input": ["bookeeper"],
        "expected": "e"
    },
    "test2": {
        "input": ["david"],
        "expected": "d"
    },
    "test3": {
        "input": ["abby"],
        "expected": "b"
    },
    "test4": {
        "input": ["mississippi"],
        "expected": "i"
    },
    "test5": {
        "input": ["potato"],
        "expected": "o"
    },
    "test6": {
        "input": ["eleventennine"],
        "expected": "e"
    },
}

from test_runner import run_test
run_test(MostFrequentChar(), 'sol2_counter', cases, False)