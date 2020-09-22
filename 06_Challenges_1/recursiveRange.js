const productOfArray = (nr) => {
  if (nr === 0) return 0;
  return nr + productOfArray(nr - 1);
};

console.log(productOfArray(6));
console.log(productOfArray(10));

// 0 + 1 + 2 + 3 + 4 + 5 + 6
