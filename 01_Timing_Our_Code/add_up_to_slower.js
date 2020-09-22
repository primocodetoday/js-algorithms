function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i += 1) {
    total += i;
  }
  return total;
}

console.time('slower');
addUpTo(1000000000);
console.time('slower');
