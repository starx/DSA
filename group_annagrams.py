""" Sols:

* for each element of the list, for each letter of that element, check if that letter exists in rest of the list element, 
    if it does add to the group if not keep going 
    problems:
        time complexity nightmare
        creating a grouping key is not easy and if we use any grouped key
* convert each character to ascii, sum that ascii character and use that sum as an index of the group group
    problems:
        different addition can reach the same total sum
* sort the letters in each element use that as the key
* what if a indexing function was created which would convert the word into 26-slot letter-frequency signature e.g acc becomes [1, 0, 2, ....]
    problem:
        what is the character set is really long or infinite like the goal of unicode
* sparse multiset implemented as hashmap
    problem:
        e.g. if using unicode, it depends on how python parses the unicode character
optimisations:

    * memoise index call for the same character
    * abstract the function caller
    * compare length of the character
    
structuring question:

edge cases:

* What if the elements is empty?
* What if there are duplicate items?
* what if the list is really long? may be infinity?
* what if the characters are really long? may be infinity?
"""

class GroupAnnagrams:
    def sol1(self, source_list: list):
        result = []
        copy_list = source_list.copy()

        while copy_list:
            item = copy_list.pop(0)
            group = [item]
            remaining = []

            for other_item in copy_list:
                
                if len(item) != len(other_item):
                    remaining.append(other_item)
                    continue

                other_item_list = list(other_item)
                all_found = True
                for ch in item:
                    if ch not in other_item_list:
                        all_found = False
                        break
                    other_item_list.remove(ch)

                if all_found:
                    group.append(other_item)
                else:
                    remaining.append(other_item)

            result.append(group)
            copy_list = remaining

        return result

    def sol2(self, source_list: list):
        result: dict[str: list] = {}
        for item in source_list:
            ascii_values = [ord(ch) for ch in item]
            ascii_total = sum(v for v in ascii_values)
            item_key = ascii_total
            
            dprint(f"item_key for {item}: {item_key}")
            if not item_key in result:
                dprint(f"new key found {item_key}")
                result[item_key] = []
                
            result[item_key].append(item)
        
        return list(result.values())

    def sol3(self, source_list: list):
        result: dict[str: list] = {}
        for item in source_list:
            item_key = ''.join(sorted(item))
            
            dprint(f"item_key for {item}: {item_key}")
            if not item_key in result:
                dprint(f"new key found {item_key}")
                result[item_key] = []
                
            result[item_key].append(item)
        
        return list(result.values())

    def sol4_signature(self, word):
        charset_signature_base = [0 for i in range(26)]
        
        for ch in word:
            ch_ord = ord(ch)
            ch_index = ch_ord - 97
            charset_signature_base[ch_index] += 1
            
        return '.'.join(str(i) for i in charset_signature_base)
    
    def sol4(self, source_list: list):
        result: dict[str: list] = {}
        for item in source_list:
            item_key = self.sol4_signature(item)
            
            dprint(f"item_key for {item}: {item_key}")
            if not item_key in result:
                dprint(f"new key found {item_key}")
                result[item_key] = []
                
            result[item_key].append(item)
        
        return list(result.values())

cases = {
    "test1": {
        "input": [
            ["eat", "tea", "tan", "ate", "nat", "bat"],
        ],
        "expected": [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
    },
    "test2_no_anagrams": {
        "input": [
            ["abc", "def", "ghi"],
        ],
        "expected": [["abc"], ["def"], ["ghi"]]
    },
    "test3_single_word": {
        "input": [
            ["abc"],
        ],
        "expected": [["abc"]]
    },
    "test4_empty_list": {
        "input": [
            [],
        ],
        "expected": []
    },
    "test5_all_duplicates": {
        "input": [
            ["aa", "aa", "aa"],
        ],
        "expected": [["aa", "aa", "aa"]]
    },
    "test6_repeated_letters_groups": {
        "input": [
            ["abb", "bab", "bba", "ab", "ba"],
        ],
        "expected": [["abb", "bab", "bba"], ["ab", "ba"]]
    },
    "test7_mixed_sizes": {
        "input": [
            ["a", "ab", "ba", "abc", "bac"],
        ],
        "expected": [["a"], ["ab", "ba"], ["abc", "bac"]]
    },
    
    "test8_large_single_group": {
        "input": [
            [
                "a" * 200 + "b" * 200,
                "b" * 200 + "a" * 200,
                ("ab" * 200),                  # 200 'a', 200 'b'
                ("ba" * 200)
            ],
        ],
        "expected": [
            [
                "a" * 200 + "b" * 200,
                "b" * 200 + "a" * 200,
                "ab" * 200,
                "ba" * 200
            ]
        ]
    },

    "test9_large_two_groups": {
        "input": [
            [
                # Group 1: 3 anagrams of length 400
                "x" * 150 + "y" * 150 + "z" * 100,
                "z" * 100 + "x" * 150 + "y" * 150,
                ("xyz" * 100) + ("x" * 50) + ("y" * 50),  # same counts reshuffled

                # Group 2: 3 anagrams of length 400
                "m" * 200 + "n" * 200,
                "n" * 200 + "m" * 200,
                ("mn" * 200)
            ],
        ],
        "expected": [
            [
                "x" * 150 + "y" * 150 + "z" * 100,
                "z" * 100 + "x" * 150 + "y" * 150,
                ("xyz" * 100) + ("x" * 50) + ("y" * 50),
            ],
            [
                "m" * 200 + "n" * 200,
                "n" * 200 + "m" * 200,
                ("mn" * 200)
            ]
        ]
    },

    "test10_large_no_anagrams": {
        "input": [
            [
                "a" * 400,
                "a" * 399 + "b",
                "a" * 398 + "bb",
                "b" * 400,
                "c" * 400,
                "abcd" * 100,       # 400 chars
                "abce" * 100,
                "xyz" * 133 + "x",  # 400 chars
                "xyz" * 133 + "y",
                "xyz" * 133 + "z",
            ]
        ],
        "expected": [
            ["a" * 400],
            ["a" * 399 + "b"],
            ["a" * 398 + "bb"],
            ["b" * 400],
            ["c" * 400],
            ["abcd" * 100],
            ["abce" * 100],
            ["xyz" * 133 + "x"],
            ["xyz" * 133 + "y"],
            ["xyz" * 133 + "z"],
        ]
    }
}

from test_runner import dprint, run_test
run_test(GroupAnnagrams(), 'sol3', cases, False)