// !4 = 4 * 3 * 2 * 1

// Loop
export const factorial1 = (num: number) => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
};

// Recursive
export const factorial2 = (num: number): number => {
  if (num === 1) return 1;

  return num * factorial2(num - 1);
};
