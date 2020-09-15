// Naive
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}
console.log(sumZero1([5, -4, -3, -2, -1, 0, 2, 3, 4, 8]));

function sumZero2(arr) {
  let begin = 0;
  let end = arr.length - 1;
  while (begin < end) {
    const sum = arr[begin] + arr[end];
    if (sum === 0) {
      return [arr[begin], arr[end]];
    }
    if (sum > 0) {
      end--;
    } else {
      begin++;
    }
  }
  return undefined;
}

console.log(sumZero2([-5, -4, -3, -2, -1, 0, 2, 3, 4, 8]));
