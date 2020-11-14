// A function that returns the number of years required to achieve the specified revenue

interface CalculateYearsArgs {
  (principal: number, interest: number, tax: number, desired: number, years?: number): number;
}

export const calculateYears: CalculateYearsArgs = (principal, interest, tax, desired, years = 0) => {
  if (principal >= desired) return years;
  principal += principal * interest * (1 - tax);
  return calculateYears(principal, interest, tax, desired, years + 1);
};
