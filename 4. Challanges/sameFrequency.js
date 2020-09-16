/* eslint-disable no-unused-expressions */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

// Given two positive integers, find out if the two numbers have the same frequency of digits.

// Time target o(n)
console.log('---------------');
const sameFrequency = (a, b) => {
  const converted1 = Array.from(String(a), Number);
  const converted2 = Array.from(String(b), Number);

  if (converted1.length !== converted2.length) {
    return false;
  }
  const checker = {};

  for (let i = 0; i < converted1.length; i++) {
    const digit = converted1[i];
    checker[digit] ? checker[digit]++ : (checker[digit] = 1);
  }
  console.log(checker);

  for (let i = 0; i < converted2.length; i++) {
    const digit = converted2[i];
    if (!checker[digit]) {
      return false;
    }
    checker[digit] -= 1;
    console.log(checker);
  }

  return true;
};
console.log('---------------');

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
