- Efficiency of the algorithm used.

- Depending on situations you might want to do few different things.
    - You can lower time complexity by increasing space complexity.
    - You can lower the space complexity by increasing time complexity.

- Measurements
- Every line of code has a time complexity.
- Every variable we create has a space complexity.
O (1)  - Constant
O (log n)  - Logarithmic
O (n) - Linear
O (n log n) - Linear log
O (n * n) - quadratic
o(2 ^ n) - exponential
o

How
- Ask, How does the **input size** affect _THIS Specific line_?
- Write down the answer against each line.
- Only take the highest 
- Drop the lower order terms e.g `2n`, `3n` becomes only `n`
- Drop the constant terms. (Drop the O (1))
- Measure the effieciency in three ways: Best, Average and Worst.
  - Use the measurement of Worst case to describe the algorithm.
