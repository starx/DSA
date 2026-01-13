## Theory

This section introduces the conceptual tools used throughout the rest of the book.

Readers may choose to start directly with problems, but the theory sections exist to
support deeper reasoning, better problem framing, and more consistent decision-making.

Nothing here is required up front, but everything here is referenced later.

## Part I — Foundations & Abstractions

### 1. Data & Abstraction

- Data Structure
- Algorithm
- Abstract Data Type (ADT)
- Primitive Data Types
- Non-Primitive Data Types
- Mutable vs Immutable
- Static vs Dynamic Allocation
- In-place Algorithms
- Stable vs Unstable Algorithms

---

### 2. Time & Space Complexity

- Cost Models
- Time Complexity
- Space Complexity
- Asymptotic Analysis
- Big-O Notation
- Big-Ω Notation
- Big-Θ Notation
- Best Case
- Average Case
- Worst Case
- Amortized Analysis
- Growth Rates
  - O(1)
  - O(log n)
  - O(n)
  - O(n log n)
  - O(n²)
  - O(2ⁿ)
  - O(n!)

---

### 3. Mathematical Tools for DSA

- Modular Arithmetic
- Greatest Common Divisor (GCD)
- Least Common Multiple (LCM)
- Prime Numbers
- Sieve of Eratosthenes
- Logarithms
- Combinatorics
  - Permutations
  - Combinations
- Power Sets
- Overflow and Integer Limits

---

## Part II — Thinking Models & Problem Framing

### 4. How to Think About Problems

- Understanding the Problem Statement
- Constraint-Driven Reasoning
- Input Size as a Design Signal
- Feasibility vs Optimality
- Brute Force as a Baseline
- Invariants
- Monotonicity
- Overlapping Subproblems
- Determinism vs Non-Determinism

---

### 5. How Not to Think

- Pattern Hunting
- Premature Optimization
- Over-Engineering
- Overfitting Sample Inputs
- Ignoring Edge Cases
- Confusing Average Case with Worst Case
- Blind Trust in Asymptotics
- Implementation-First Thinking

---

### 6. Practical Problem Handling

- Edge Cases
- Corner Cases
- Test Case Design
- Dry Runs
- Debugging by Invariant Checking
- Online Judges
  - Time Limit Exceeded (TLE)
  - Memory Limit Exceeded (MLE)
  - Wrong Answer (WA)

---

### 7. How Solutions Evolve

- Brute Force → Pruned Brute Force
- Constraint-Based Reduction
- Search Space Narrowing
- State Reduction
- Time–Space Trade-offs
- When to Stop Optimizing

---

## Part III — Problem-Solving Techniques (Patterns)

### 8. Core Algorithmic Techniques

- Two Pointers
- Sliding Window
- Divide and Conquer
- Greedy Strategy
- Recursion
- Recursion Trees
- Backtracking
- Binary Search
- Binary Search on Answer
- Dynamic Programming
  - State Definition
  - Transitions
  - Optimization
- Memoization
- Tabulation

---

### 9. Structural Patterns

- Fast and Slow Pointer
- Prefix Sums
- Difference Arrays
- Monotonic Stack
- Monotonic Queue
- Sweep Line
- Disjoint Set Pattern

---

## Part IV — Data Structures (Concrete Models)

### 10. Linear Data Structures

#### 10.1 Arrays & Strings

- Array
- Dynamic Array
- Indexing
- Memory Layout
- Subarray
- Subsequence
- Prefix
- Suffix
- Frequency Array
- In-place Modification
- String Immutability

---

#### 10.2 Linked Lists

- Node
- Singly Linked List
- Doubly Linked List
- Circular Linked List
- Head
- Tail
- Pointer / Reference
- Traversal
- Insertion
- Deletion
- Cycle Detection
- Floyd’s Cycle Detection Algorithm

---

#### 10.3 Stack

- LIFO (Last In, First Out)
- Push
- Pop
- Peek / Top
- Stack Frames
- Expression Evaluation
- Stack Overflow
- Stack Underflow

---

#### 10.4 Queue

- FIFO (First In, First Out)
- Enqueue
- Dequeue
- Front
- Rear
- Circular Queue
- Deque
- Priority Queue

---

### 11. Hash-Based Structures

- Hash Function
- Hash Table
- Key-Value Pair
- Collision
- Chaining
- Open Addressing
- Linear Probing
- Quadratic Probing
- Double Hashing
- Load Factor
- Rehashing
- Buckets
- Practical Hash Pitfalls

---

### 12. Tree Structures

#### 12.1 Tree Fundamentals

- Tree
- Node
- Root
- Parent
- Child
- Sibling
- Leaf Node
- Internal Node
- Degree
- Height
- Depth
- Level
- Subtree

---

#### 12.2 Binary Trees

- Binary Tree
- Binary Search Tree (BST)
- Full Binary Tree
- Complete Binary Tree
- Perfect Binary Tree
- Balanced Binary Tree
- Skewed Tree

---

#### 12.3 Tree Traversals

- Preorder Traversal
- Inorder Traversal
- Postorder Traversal
- Level Order Traversal

---

#### 12.4 Advanced Trees

- AVL Tree
- Red-Black Tree
- Heap
  - Min Heap
  - Max Heap
- Trie (Prefix Tree)
- Segment Tree
- Fenwick Tree (Binary Indexed Tree)

---

### 13. Graph Structures

#### 13.1 Graph Fundamentals

- Graph
- Vertex
- Edge
- Directed Graph
- Undirected Graph
- Weighted Graph
- Unweighted Graph
- Adjacency List
- Adjacency Matrix
- Degree
- In-Degree
- Out-Degree
- Path
- Cycle
- Connected Graph
- Disconnected Graph
- Directed Acyclic Graph (DAG)
- Strongly Connected Components (SCC)

---

#### 13.2 Graph Traversals

- Breadth-First Search (BFS)
- Depth-First Search (DFS)

---

## Part V — Algorithms (Operating on Structures)

### 14. Searching Algorithms

- Linear Search
- Binary Search
- Lower Bound
- Upper Bound
- Search Space Design

---

### 15. Sorting Algorithms

- Sorting Fundamentals
- Comparison Sorts
- Non-Comparison Sorts
- Stable Sorting
- In-place Sorting
- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Heap Sort
- Counting Sort
- Radix Sort
- Bucket Sort

---

### 16. Graph Algorithms

- Shortest Path Algorithms
  - Dijkstra’s Algorithm
  - Bellman-Ford Algorithm
  - Floyd-Warshall Algorithm
- Minimum Spanning Tree (MST)
  - Prim’s Algorithm
  - Kruskal’s Algorithm
- Topological Sort
- Union-Find (Disjoint Set Union)
  - Path Compression
  - Union by Rank

---



### 17. Part VI - Others Low-Level or Extend topics

### Bit-Level Reasoning

- Binary Representation
- Signed vs Unsigned Integers
- Two’s Complement
- Bitwise Operations
  - AND
  - OR
  - XOR
  - NOT
- Bit Shifts
- Bit Masks
- Set / Clear / Toggle Bits
- Common Bit Idioms
- Space-Optimized State Encoding
- Bitmask DP (intro, not full DP chapter)

---