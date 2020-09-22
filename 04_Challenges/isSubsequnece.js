const isSubsequence = (a, b) => {
  let i = 0;
  let j = 0;

  if (!a) return true;

  while (j < b.length) {
    if (b[j] === a[i]) i++;
    if (i === a.length) return true;
    j++;
  }
  return false;
};

console.log(isSubsequence('hello', 'hello World')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
