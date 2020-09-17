// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
//  This function should mimic the functionality of Math.pow

const factorial = (base, pow) => {
  if (pow === 0) return 1;
  return base * factorial(base, pow - 1);
};

console.log(factorial(2, 0));
console.log(factorial(2, 2));
console.log(factorial(2, 4));
