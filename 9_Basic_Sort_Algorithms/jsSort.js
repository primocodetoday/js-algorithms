const numCompare = (num1, num2) => {
  return num1 - num2;
  // return num2 - num1;
};

console.log([3, 1, 5, 12, 7, 2, 8, 6, 4].sort(numCompare));
