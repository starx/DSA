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