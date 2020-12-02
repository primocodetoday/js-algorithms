import { arr } from './inputs/input1';

const sorted = arr.sort((a, b) => (a > b ? 1 : -1));

const findSumOf2 = <T extends number>(arr: T[], nr: T) => {
  let begin = 0;
  let end = arr.length - 1;
  while (begin < end) {
    const sum = arr[begin] + arr[end];
    if (sum === nr) {
      return [arr[begin], arr[end]];
    }
    if (sum > nr) {
      end--;
    } else {
      begin++;
    }
  }
  return undefined;
};

const numbers2 = findSumOf2(sorted, 2020);
const result2 = numbers2 ? numbers2.reduce((prev, acc) => prev * acc, 1) : null;

console.log(result2);

const findSumOf3 = <T extends number>(arr: T[], nr: T) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      for (let k = 2; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === nr) {
          return [arr[i], arr[j], arr[k]];
        }
      }
    }
  }
  return undefined;
};

const numbers3 = findSumOf3(sorted, 2020);
const result3 = numbers3 ? numbers3.reduce((prev, acc) => prev * acc, 1) : null;
console.log(result3);
