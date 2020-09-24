// RADIX SORT PSEUDOCODE
// Define a function that accepts list of numbers
// Figure out how many digits the largest number has
// Loop from k = 0 up to this largest number of digits
// For each iteration of the loop:
// Create buckets for each digit (0 to 9)
// place each number in the corresponding bucket based on its kth digit
// Replace our existing array with values in our buckets, starting with 0 and going up to 9
// return list at the end!

const getDigit = (num, i) => {
  return Math.floor((Math.abs(num) / 10 ** i) % 10);
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.ceil(Math.log10(Math.abs(num)));
};

const mostDigits = (array) => {
  let maxDigits = 0;
  for (let i = 0; i < array.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(array[i]));
  }
  return maxDigits;
};

const radixSort = (array) => {
  const maxDigit = mostDigits(array);
  for (let k = 0; k < maxDigit; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < array.length; i++) {
      const digit = getDigit(array[i], k);
      digitBuckets[digit].push(array[i]);
    }
    array = [].concat(...digitBuckets);
  }
  return array;
};

console.log(
  radixSort([3221, 1, 10, 9680, 577, 7, 5622, 4793, 203, 82, 599, 743, 4127]),
);
