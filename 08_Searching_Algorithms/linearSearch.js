const linearSearch = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
};

console.log(linearSearch([3, 1, 5, 12, 7, 2, 8, 6, 4], 7));
