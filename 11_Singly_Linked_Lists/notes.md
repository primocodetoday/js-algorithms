﻿Comparisons with Arrays

## Lists 
Do not have indexes!
Connected via nodes with a next pointer
Random access is not allowed

## Arrays
Indexed in order!
Insertion and deletion can be expensive
Can quickly be accessed at a specific index


## Pushing pseudocode

This function should accept a value
Create a new node using the value passed to the function
If there is no head property on the list, set the head and tail to be the newly created node
Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
Increment the length by one
Return the linked list