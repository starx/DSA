## Problem

Given a time in [-hour AM/PM format](https://en.wikipedia.org/wiki/12-hour_clock), convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.\
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

**Example**

-   Return '12:01:00'.

-   Return '00:01:00'.

**Function Description**

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

-   string s: a time in  hour format

**Returns**

-   string: the time in  hour format

**Input Format**

A single string  that represents a time in -hour clock format (i.e.:  or ).

**Constraints**

-   All input times are valid

**Sample Input**

```
07:05:45PM

```

**Sample Output**

```
19:05:45
```

## My solution

```python
#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def timeConversion(s):
    splits = s.split(":")
    h = int(splits[0])
    m = int(splits[1])
    s = int(splits[2][0:2])
    is_am = splits[2][2:4] == 'AM'
    # print(h, m, s, 'am' if is_am else 'pm')
    if is_am and h == 12:
        h = 0
    elif not is_am and h < 12:
        h = h+12
    
    return f'{h:0>2}:{m:0>2}:{s:0>2}'
        
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()
```

## Other solution


function timeConversion(s) {
    // Write your code here 11:11:11AM
    const format = s.substring(s.length - 2);
    let hour = s.substring(0, 2);
    const minusSecond = s.substring(2, 8);
    if (format == "AM") {
        hour = hour == 12 ? '00' : hour;
    }
    if (format == "PM") {
        hour = +hour + 12 < 24 ? +hour + 12 : '12';
    }
    return hour + "" + minusSecond;
}