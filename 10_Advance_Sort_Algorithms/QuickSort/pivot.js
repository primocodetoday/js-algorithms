// Pivot Pseudocode
// It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
// If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// Swap the starting element (i.e. the pivot) with the pivot index
// Return the pivot index

import { swap } from './swap';

export const pivot = (array, start = 0, end = array.length - 1) => {
  const piv = array[start];
  let storeIndex = start;

  for (let i = start + 1; i < end; i++) {
    if (piv > array[i]) {
      storeIndex++;
      swap(array, storeIndex, i);
    }
  }
  // moving pivot to correct position
  swap(array, start, storeIndex);
  return storeIndex;
};
