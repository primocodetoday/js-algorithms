const recursiveRange = (nr) => {
  if (nr === 0) return 0;
  return nr + recursiveRange(nr - 1);
};

console.log(recursiveRange(6));
console.log(recursiveRange(10));

// 0 + 1 + 2 + 3 + 4 + 5 + 6
