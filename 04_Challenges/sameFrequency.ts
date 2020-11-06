// Given two positive integers, find out if the two numbers have the same frequency of digits.

// Time target o(n)
export const sameFrequency = <T extends number>(a: T, b: T) => {
  const converted1 = Array.from(String(a), Number);
  const converted2 = Array.from(String(b), Number);

  if (converted1.length !== converted2.length) {
    return false;
  }
  const checker: { [key: number]: number } = {};

  for (let i = 0; i < converted1.length; i++) {
    const digit = converted1[i];
    checker[digit] ? checker[digit]++ : (checker[digit] = 1);
  }

  for (let i = 0; i < converted2.length; i++) {
    const digit = converted2[i];
    if (!checker[digit]) {
      return false;
    }
    checker[digit] -= 1;
  }

  return true;
};
