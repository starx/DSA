# Two pointer

* It is an algorithmic pattern, that uses two moving pointers through a sequence (string, array or any iterable structure).
* The core reason is this pattern allows to reduce loops/nested loops in a solution. Often aiming to reduce O(n²) → O(n). 
* There are no constraints to how the pointers can move. It is often dicatated by the problem.


## When to think about using this?

Use two pointers when the problem involves:

* Comparing elements from both ends
* Searching in a sorted array
* Finding pairs/triples with a target sum
* Removing duplicates in-place
* Checking symmetry (palindrome)
* Partitioning around a condition
* Merging sorted sequences

Main question to ask is:

> Can I solve this by moving inward or scanning together?


## Different ways to move the pointer

1. *Opposite Ends*
    
    * Useful to compare symmetry or when monotonic conditions let us pair the data.
    
    * Examples: palindrome, container with most water.

    ```txt
    L →       ← R
    ```

2. *Same Direction* (Fast & Slow)

    * Useful to skip or compress elements, or to detect cycles. 
    
    * Examples: remove duplicates, linked list cycle.

    ```txt
    slow → 
    fast → →
    ```

3. *Sliding Window*: 

    * Here the two pointers composes a window that expands/contracts.  
    
    * Useful to find a contiguous subarray/substring that satisfies a condition. 
    
    * This is a pattern on it own, but it is technically a sub pattern of two pointers. 
    
    * Examples: longest substring without repeats.

    ```txt
    [L ---- R]
    ```

4. Two Arrays Merge

    * Useful when merging or comparing two different sequences. 

    * The sequences must be sorted or ordered. 
    
    * Examples: merge sorted arrays.

    ```txt
    A[i] vs B[j]
    ```

5. Partioning

    * Useful to group elements around a condition or pivot.
    
    * Examples: move zeros, sort colors.



## Core Examples:

* Palindrome string
* Pair sum sorted array
* Remove duplicates
* Merge sorted arrays
* Linked list cycle detection

