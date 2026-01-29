export class Node<T> {

    constructor(
        public value: T,
        public left: Node<T>|null = null,
        public right: Node<T>|null = null
    ) {

    }

}

function tree_to_value_array_depth_first<T>(root: Node<T>): T[] {
    let values: T[] = [];
    if(root) {
      values.push(root.value);

      if(root.left) {
        values.push(...tree_to_value_array_depth_first(root.left));
      }
      if (root.right) {
        values.push(...tree_to_value_array_depth_first(root.right));
      }
    }
    return values;    
}

function tree_to_value_array_breadth_first<T>(root: Node<T> | null): T[] {
    const values: T[] = [];
    const queue: Array<Node<T>> = [];

    if (root) queue.push(root);

    let i = 0; // read index
    while (i < queue.length) {
      const currNode = queue[i];
      values.push(currNode.value);

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);

      i++;
    }

    return values;
  }
}