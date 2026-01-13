# Linked list


* It is a linear structure that consists of nodes.
* Each node will store the reference the next node in the sequence.

**Linked list vs Array**

- Arrays are stored in contiguous memory blocks. Linked lists consist of nodes that can be stored in non-contiguous memory and are connected via pointers.
- Arrays provide **O(1)** random access via indexing, but **O(n)** insertion and deletion due to element shifting.
- Linked lists require **O(n)** access and traversal, but allow **O(1)** insertion and deletion when the position (node reference) is already known.

## Definition

Python (using class)

```py
class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

node1 = Node("abc")
node2 = Node("def")
node3 = Node("ghi")

node1.next = node2
node2.next = node3

```

Python (using dict)

```python

node1 = {"value": "abc", "next": None}
node2 = {"value": "ghi", "next": None}
node3 = {"value": "def", "next": None}

node1["next"] = node2
node2["next"] = node3

linkedList = {
    "current": node1
}

```

Javascript (using object)

```js

const node1 = { value: "abc", next: null };
const node2 = { value: "ghi", next: null };
const node3 = { value: "def", next: null };

node1.next = node2;
node2.next = node3;

const linkedList = {
current: node1
};

```

PHP (using classes)

PHP arrays are copy-on-write, and you cannot have true self-referential array nodes like in the above example of JS and Python.

```php

class Node {
    public function __construct(public $value, public $next = null) {}
}

$node1 = new Node("abc");
$node2 = new Node("def");
$node3 = new Node("ghi");

$node1->next = $node2;
$node2->next = $node3;

$linkedList = [
    "current" => $node1
];

```
