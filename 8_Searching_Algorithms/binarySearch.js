const binarySearch = (arr, item) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] < item) {
      left = middle + 1;
    } else if (arr[middle] > item) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));

// O(log n)
// 16 items = max 4 steps 2^4 = 16
// 32 items = max 5 steps 2^5 = 32
// etc...
