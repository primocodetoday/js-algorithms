// Implement a function called,areThereDuplicates, which accepts a variable number of arguments,and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

export const areThereDuplicates = <T extends string | number>(...args: T[]) => {
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

// Solution with new Set
export const areThereDuplicatesES6 = <T extends string | number>(...args: T[]) => {
  return new Set(args).size !== args.length;
  //  genius ;)
};
