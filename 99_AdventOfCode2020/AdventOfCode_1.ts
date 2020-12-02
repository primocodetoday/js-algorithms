export const findSumOf2andMultiply = <T extends number>(arr: T[], nr: T) => {
  arr = arr.sort((a, b) => (a > b ? 1 : -1));
  let result: T[] = [];
  let begin = 0;
  let end = arr.length - 1;
  while (begin < end) {
    const sum = arr[begin] + arr[end];
    if (sum === nr) {
      result = [arr[begin], arr[end]];
    }
    if (sum > nr) {
      end--;
    } else {
      begin++;
    }
  }
  return result ? result.reduce((prev, acc) => prev * acc, 1) : undefined;
};

export const findSumOf3andMultiply = <T extends number>(arr: T[], nr: T) => {
  arr = arr.sort((a, b) => (a > b ? 1 : -1));
  let result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      for (let k = 2; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === nr) {
          result = [arr[i], arr[j], arr[k]];
        }
      }
    }
  }
  return result ? result.reduce((prev, acc) => prev * acc, 1) : undefined;
};
