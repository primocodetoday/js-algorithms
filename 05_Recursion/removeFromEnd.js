const removeFromEnd1 = (input) => {
  if (input.endsWith('!')) {
    return removeFromEnd1(input.slice(0, -1));
  }
  return input;
};
console.time('recursion');
removeFromEnd1('beeee!!!!!!!!!!!!!');
console.timeEnd('recursion');

const removeFromEnd2 = (inputString) => {
  return inputString.replace(/!+$/, '');
};

console.time('regExp');
removeFromEnd2('beeee!!!!!!!!!!!!!');
console.timeEnd('regExp');
