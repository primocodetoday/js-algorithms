const productOfArray = (arr) => {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * recursiveRange(arr.slice(1));
};

console.log(recursiveRange([2]));
console.log(recursiveRange([1, 2, 3]));
console.log(recursiveRange([1, 2, 3, 10]));

// 1 * 2 * 3
// 1 * 2 * 3 * 10
