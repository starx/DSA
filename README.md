# Data structure & Algorithms

This repository contains notes — and by extension a book — aimed at revising and learning
Data Structures and Algorithms through disciplined thinking and problem-solving.

> Disclaimer: This project is actively being polished and may contain incomplete or rough sections.
> Solutions are written in JavaScript, Python, and PHP, depending on context.

The material is presented in a book-like structure so others can benefit from it as well.
If you’re curious about *why* this exists, see [motivation.md](./motivation.md).

## Structure

### 1. Theory

This section introduces the conceptual tools used throughout the rest of the book.

Readers may choose to start directly with problems, but the theory sections exist to support
deeper reasoning, better problem framing, and more consistent decision-making.

Nothing here is required up front, but everything here is referenced later.

[The DSA Theory](./theory/README.md)


### 2. Problems

Problems here are not going to be focused on a technique, or a pattern. Each problem can be solved in multiple ways and may appear in multiple classifications. The classifications below are indexes, not ownership claims.

#### Classification by Thinking Model

Problems grouped by the *type of reasoning* they demand, independent of technique.

- **Constraint-Dominated Problems**
  - Tight limits on time or space dictate feasibility
  - Often rule out brute force immediately

- **Feasibility vs Optimization Problems**
  - Can this be done? vs what is the best possible result?

- **Monotonicity-Based Problems**
  - Solutions rely on ordered or one-directional behavior
  - Often enable binary search or sliding window reasoning

- **State Explosion Problems**
  - Naive approaches generate too many states
  - Require pruning, memoization, or state compression

- **Overlapping Subproblem Problems**
  - Same computations repeated across branches
  - Signal dynamic programming or memoization

- **Search Space Exploration Problems**
  - Need systematic traversal of possibilities
  - DFS, BFS, backtracking, or implicit graphs

- **Incremental Construction Problems**
  - Solution is built step by step
  - Validity must hold at every intermediate stage

---

#### Classification by Pattern

Problems grouped by *reusable solution techniques*.
A problem may belong to multiple patterns.

- **Two Pointers**
  - Linear scans with coordinated movement

- **Sliding Window**
  - Fixed or variable-size ranges with incremental updates

- **Binary Search**
  - Explicit search over sorted data
  - Implicit search over answer space

- **Divide and Conquer**
  - Split, solve independently, combine

- **Greedy**
  - Locally optimal decisions with global correctness

- **Dynamic Programming**
  - Explicit state definition and transitions

- **Backtracking**
  - Exhaustive search with pruning

- **Prefix-Based Techniques**
  - Prefix sums, difference arrays

- **Monotonic Structures**
  - Monotonic stacks and queues

- **Union-Find**
  - Dynamic connectivity and grouping

---

#### Classification by Data Structure

Problems grouped by the *storage and access model* implied by operations.

- **Array-Based Problems**
  - Indexed access, contiguous memory
  - Often combined with prefix techniques

- **String Problems**
  - Immutability, character-level processing

- **Hash-Based Problems**
  - Fast membership, frequency counting, deduplication

- **Stack-Oriented Problems**
  - Nested structure, LIFO semantics

- **Queue-Oriented Problems**
  - Level-order processing, scheduling

- **Heap-Based Problems**
  - Priority-driven access

- **Tree Problems**
  - Hierarchical structure, recursion

- **Graph Problems**
  - Arbitrary connectivity, traversal, cycles

- **Set / Map Problems**
  - Uniqueness, grouping, counting

---

#### Hybrid Problems

Problems that *cannot be cleanly solved* using a single lens.

- **Pattern Hybrids**
  - Sliding window + heap
  - Greedy + binary search
  - DP + bitmasking

- **Structure Hybrids**
  - Graph + DP
  - Tree + DFS + memoization
  - Trie + backtracking

- **Thinking Hybrids**
  - Feasibility → optimization transitions
  - Brute force → greedy → DP escalation

- **Constraint-Driven Hybrids**
  - Same problem, different optimal solutions under different limits

Hybrid problems are the norm, not the exception.
They reward flexibility over memorization.