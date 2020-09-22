const factorial = (nr) => {
  if (nr === 0) return 1;
  return nr * factorial(nr - 1);
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));
