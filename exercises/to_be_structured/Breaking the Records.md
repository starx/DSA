## Problem

Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

**Example**

Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1

Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

**Function Description**

Complete the breakingRecords function in the editor below.

breakingRecords has the following parameter(s):

-   int scores[n]: points scored per game

**Returns**

-   int[2]: An array with the numbers of times she broke her records. Index  is for breaking most points records, and index  is for breaking least points records.

**Input Format**

The first line contains an integer , the number of games.\
The second line contains  space-separated integers describing the respective values of .

**Constraints**

**\
**

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