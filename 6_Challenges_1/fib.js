const fib = (nr) => {
  if (nr <= 2) return 1;
  return fib(nr - 1) + fib(nr - 2);
};

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));

// 1 + 1 + 2 + 3 + 5 + 8;
