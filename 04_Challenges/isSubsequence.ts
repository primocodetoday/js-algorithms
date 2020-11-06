export const isSubsequence = <T extends string>(a: T, b: T) => {
  let i = 0;
  let j = 0;

  while (j < b.length) {
    if (b[j] === a[i]) i++;
    if (i === a.length) return true;
    j++;
  }
  return false;
};
