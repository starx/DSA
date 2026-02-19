from linked_list import Node
from test_runner import dprint, run_test
from typing import List

class ZipperList:
    def sol1_iterative(self, a: List[Node], b: List[Node]) -> List[any]:
        if a:
            head = a
        else:
            head = b

        while a or b:
            aNext = None
            bNext = None

            if a:
                aNext = a.next
            
            if b:
                bNext = b.next

            if a and b:
                a.next = b
            
            if aNext and b:
                b.next = aNext
            
            
            a = aNext
            b = bNext
        
        from linked_list_values.linked_list_values import LinkedListValues
        printlist = []
        while(head):
            printlist.append(head.value)
            head = head.next


        return printlist


# a   b
# c   d
# e   f
# g
# h

# q   r
# s   t
#     u
#     v

        pass


from .test_cases import test_cases
run_test(
    ZipperList(),
    'sol1_iterative',
    test_cases,
    True
)