export class Node<T> {
    value: T;
    next: Node<T> | null;
    
    constructor(value: T, next: Node<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}

export function list_to_value_array<t>(head: Node<t>): t[] {
    const values: t[] = [];
    while (head !== null) {
        values.push(head.value);
        if (head.next === null) {
            break;
        }
        head = head.next;

    }

    return values;
}    