const getDigit = (num, i) => {
  return Math.floor((Math.abs(num) / 10 ** i) % 10);
};

console.log(getDigit(132578, 0));

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.ceil(Math.log10(Math.abs(num)));
};

console.log(digitCount(332578));

const mostDigits = (array) => {
  let maxDigits = 0;
  for (let i = 0; i < array.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(array[i]));
  }
  return maxDigits;
};

console.log(mostDigits([332578, 21, 543, 2344, 87521]));
