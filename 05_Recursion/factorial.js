// !4 = 4 * 3 * 2 * 1

// Loop
const factorial1 = (num) => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
};

// console.log(factorial1(3));

// Recursive
const factorial2 = (num) => {
  if (num === 1) return 1;

  return num * factorial1(num - 1);
};

console.log(factorial2(6));
