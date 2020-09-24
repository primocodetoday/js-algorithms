// Quicksort Pseudocode
// Call the pivot helper on the array
// When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
// Your base case occurs when you consider a subarray with less than 2 elements

const swap = (arr, x, y) => {
  [arr[x], arr[y]] = [arr[y], arr[x]];
};

const pivot = (array, start = 0, end = array.length + 1) => {
  const piv = array[start];
  let storeIndex = start;

  for (let i = start + 1; i < array.length; i++) {
    if (array[i] < array[piv]) {
      storeIndex++;
      swap(array, i, storeIndex);
    }
  }
  // moving pivot to correct position
  swap(array, start, storeIndex);

  return storeIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

const testArray = [4, 8, 2, 1, 5, 7, 6, 3];

console.log(quickSort(testArray));

// not use this with almost sorted data or use pivot in yhe middle
