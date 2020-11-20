export const fib = (nr: number): number => {
  if (nr <= 2) return 1;
  return fib(nr - 1) + fib(nr - 2);
};
