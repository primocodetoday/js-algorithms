function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

console.time('faster');
addUpTo(1000000000);
console.time('faster');
