# isPalindrome

## Problem

Write a function, `isPalindrome`, that takes in a string as an argument.  
The function should return a boolean indicating whether or not the string is a palindrome.

A palindrome is a string that reads the same forwards and backwards.


You may assume the input is a non-empty string.

---

## Test Cases

### test_00
```ts
isPalindrome("racecar"); // -> true
```

### test_01
```ts
isPalindrome("nursesrun"); // -> true
```

### test_02
```ts
isPalindrome("robot"); // -> false
```

### test_03
```ts
isPalindrome("a"); // -> true
```

### test_04
```ts
isPalindrome("aa"); // -> true
```

### test_05
```ts
isPalindrome("ab"); // -> false
```

### test_06
```ts
isPalindrome("abba"); // -> true
```

### test_07
```ts
isPalindrome("abcba"); // -> true
```

### test_08
```ts
isPalindrome("abcdcba"); // -> true
```

### test_09
```ts
isPalindrome("abcd"); // -> false
```

---

## Edge Cases

### edge_00
Single character
```ts
isPalindrome("z"); // -> true
```

### edge_01
Two identical characters
```ts
isPalindrome("cc"); // -> true
```

### edge_02
Two different characters
```ts
isPalindrome("xy"); // -> false
```

### edge_03
Long palindrome
```ts
isPalindrome("abcdefghhgfedcba"); // -> true
```

### edge_04
Long non-palindrome
```ts
isPalindrome("abcdefghijklmnop"); // -> false
```

