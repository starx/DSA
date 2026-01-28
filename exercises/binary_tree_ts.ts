export class Node<T> {

    constructor(
        public value: T,
        public left: Node<T>|null = null,
        public right: Node<T>|null = null
    ) {

    }

}

function list_to_depth_first_value_array<T>(root: Node<T>): T[] {
    let values: T[] = [];
    if(root) {
      values.push(root.value);

      if(root.left) {
        values.push(...list_to_depth_first_value_array(root.left));
      }
      if (root.right) {
        values.push(...list_to_depth_first_value_array(root.right));
      }
    }
    return values;    
}