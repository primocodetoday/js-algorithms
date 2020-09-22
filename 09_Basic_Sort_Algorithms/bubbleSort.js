// BubbleSort Pseudocode

// Start looping from with a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array

const swapES6 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubbleSort = (arr) => {
  let swap;
  for (let i = arr.length; i > 0; i--) {
    swap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapES6(arr, j, j + 1);
        swap = true;
      }
    }
    if (!swap) break;
  }

  return arr;
};
// O(n^2)

console.log(bubbleSort([3, 1, 5, 12, 7, 2, 8, 6, 4]));
