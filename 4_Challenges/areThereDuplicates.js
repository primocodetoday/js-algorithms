// Implement a function called,areThereDuplicates, which accepts a variable number of arguments,and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

const areThereDuplicates = (...args) => {
  const arr = args;

  let start = 0;
  const end = arr.length - 1;

  while (start < end) {
    if (arr[start] !== arr[end]) {
      start++;
    } else {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
console.log(areThereDuplicates('f', 'b', 'c', 'a', 'a'));

// Solution with new Set
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length; genius
// }
