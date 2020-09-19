// const swapES5 = (arr, idx1, idx2) => {
//   const temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// };

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
