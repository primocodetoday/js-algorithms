// Insertion Sort Pseudocode

// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
// Repeat until the array is sorted.

const selectionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const targetValue = arr[i];
    for (let j = i - 1; j >= 0 && targetValue < arr[j]; j--) {
      [arr[j], arr[j + 1]] = [targetValue, arr[j]];
    }
  }
  return arr;
};
// O(n^2)

console.log(selectionSort([3, 1, 5, 12, 7, 2, 8, 6, 4]));
