- divide and conquor.
- Choose a pivot and loop through every elements
  - Make sure all items in the left are smaller.
  - Make sure all items in the right are larger.
  - 
![quick sort](./files/quick%20sort.gif)

**Pseudo Code for recursive QuickSort function :** 

```
/* low  --> Starting index,  high  --> Ending index */
quickSort(arr[], low, high)
{
    if (low < high)
    {
        /* pi is partitioning index, arr[pi] is now
           at right place */
        pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);  // Before pi
        quickSort(arr, pi + 1, high); // After pi
    }
}
```
> https://www.geeksforgeeks.org/merge-sort/