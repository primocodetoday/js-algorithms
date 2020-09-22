const calculateYears = (principal, interest, tax, desired, years = 0) => {
  if (principal >= desired) return years;
  principal += principal * interest * (1 - tax);
  return calculateYears(principal, interest, tax, desired, years + 1);
};

console.log(calculateYears(1000, 0.05, 0.18, 1100));
